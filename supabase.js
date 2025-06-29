
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbjuveuixwxuydibwqgd.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNianV2ZXVpeHd4dXlkaWJ3cWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjgyNzksImV4cCI6MjA2Njc0NDI3OX0.iJDJea5kFXmRfZt0Sen-BV7dPxcYnenw5OE2ohpjzEw
const supabase = createClient(supabaseUrl, supabaseKey)