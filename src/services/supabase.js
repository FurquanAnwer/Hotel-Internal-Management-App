
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ehllxlibfxivmlwidmox.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobGx4bGliZnhpdm1sd2lkbW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NTU2MjksImV4cCI6MjAzMTUzMTYyOX0.0JxmfEc9L7VtnHlwddAT7U47eemDwD1_I4sfcnEJP4A";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
