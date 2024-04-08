
export const phoneAreaCodesByWorld = [
    { value: '1', label: 'USA/Canada' },
    { value: '33', label: 'France' },
    { value: '39', label: 'Italy' },
    { value: '49', label: 'Germany' },
    { value: '61', label: 'Australia' },
    { value: '81', label: 'Japan' },
    { value: '86', label: 'China' },
    { value: '91', label: 'India' },
    { value: '1345', label: 'Cayman Islands' },
]

export const getUserAvatarUrl = (): string => {
    const seed = Math.round(Math.random() * 100)
    const userAvatarUrl = `https://api.dicebear.com/7.x/miniavs/svg?seed=${seed}`
    return userAvatarUrl
}