// supabaseClient.js
import * as dotenv from 'dotenv'
dotenv.config()

console.log('🔍 SUPABASE_URL=', process.env.SUPABASE_URL)
console.log('🔍 SUPABASE_KEY=', process.env.SUPABASE_KEY ? '✔️ key loaded' : '❌ missing key')

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
export default supabase
