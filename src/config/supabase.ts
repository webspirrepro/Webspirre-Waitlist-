import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseUrl = "https://nawqzhetlcutvfqhyjsv.supabase.co";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hd3F6aGV0bGN1dHZmcWh5anN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDkyNjIzMSwiZXhwIjoyMDI2NTAyMjMxfQ.3JsRUK65hJeZcqxZg-rivikwvnylnGXgvsr2CyqwcWY";

export const supabase = createClient(supabaseUrl, supabaseKey);
