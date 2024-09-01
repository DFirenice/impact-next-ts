const filter = (query: string, predicate: any[], property: string | undefined = undefined) => {
    const lowerQuery = query.toLowerCase()
    
    const filteredList = predicate.filter(item => {
        if ( property ) return item[property!].toString().toLowerCase().includes(lowerQuery)
        else return item.toString().toLowerCase().includes(lowerQuery)
    })

    return filteredList
}

export default filter