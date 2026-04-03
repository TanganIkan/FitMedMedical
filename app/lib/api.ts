// lib/api.ts

// Tipe khusus untuk variabel GraphQL agar tetap strict tanpa menggunakan 'any'
type GraphQLVariables = Record<string, unknown>;

export async function fetchAPI<T>(query: string, { variables }: { variables?: GraphQLVariables } = {}): Promise<T> {
  const headers = { "Content-Type": "application/json" };

  // Mengambil URL yang sudah kamu set di .env.local
  // (http://fitmed-apilocal.local/graphql)
  const API_URL = process.env.WORDPRESS_API_URL;

  if (!API_URL) {
    throw new Error("WORDPRESS_API_URL belum diatur di file .env.local");
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    // ISR: Halaman akan di-generate ulang di background setiap 60 detik
    // jika ada request masuk, sehingga klien tidak perlu rebuild saat update artikel.
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Gagal fetch data API dari WordPress Lokal");
  }

  return json.data as T;
}
