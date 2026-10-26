export const useAuth = () => {
  const adminAuth = useState<Record<string, any> | null>('adminAuth', () => null)
  return { adminAuth }
}