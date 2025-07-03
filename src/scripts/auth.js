// For auth to supabase
import { supabase } from './db'

export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  return data && error == null ? true : false
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  return error == null ? true : false
}

export const getSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session ? true : false
}
