export const useCustomerState = () => {
  return useState<Record<string, any> | null>('customerState', () => null)
}