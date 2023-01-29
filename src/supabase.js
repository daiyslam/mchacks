
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://noigvahgtapzlzwekbaf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vaWd2YWhndGFwemx6d2VrYmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4NDAzODMsImV4cCI6MTk5MDQxNjM4M30.O_GezalR7tWwrfKw6FA8O7hQ0zfwIByQ-6Jwb7Zt4Qg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;