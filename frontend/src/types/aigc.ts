export type AIGCMechanismDataType = {
    id: string,
    name: string,
    product: string,
    productType: string,
    mechanismType: string,
    description: string,
    tags: string[],
    website: string,
    logo: string,
    area: string,
    address: string,
}

export type AIGCMechanismFormType = 'search' | 'add' | 'edit'