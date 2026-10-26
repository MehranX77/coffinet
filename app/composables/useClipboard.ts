export const useClipboard =  (data: string) => {
    try {
        const savedData =  window.navigator.clipboard.writeText(data)        
        return { savedData }
    } catch (error: any) {
        return error.data
    }
}