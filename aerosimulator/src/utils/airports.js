export const airports = [
    {id: 0, name: "Brasilia"},    {id: 1, name: "Teresina"},    {id: 2, name: "Fortaleza"},    
    {id: 3, name: "Natal"},    {id: 4, name: "Joao Pessoa"},    {id: 5, name: "Recife"},    
    {id: 6, name: "Maceio"},    {id: 7, name: "Aracaju"},    {id: 8, name: "Salvador"},    
    {id: 9, name: "Vitoria"},    {id: 10, name: "Rio de Janeiro"},    {id: 11, name: "Sao Paulo"},    
    {id: 12, name: "Curitiba"},    {id: 13, name: "Florianopolis"},    {id: 14, name: "Porto Alegre"},    
    {id: 15, name: "Campo Grande"},    {id: 16, name: "Cuiaba"},    {id: 17, name: "Porto Velho"},    
    {id: 18, name: "Rio Branco"},    {id: 19, name: "Manaus"},    {id: 20, name: "Boa Vista"},    
    {id: 21, name: "Macapá"},    {id: 22, name: "Belém"},    {id: 23, name: "São Luis"},    
    { id: 24, name: "Palmas"},    {id: 25, name: "Goiania"},    {id: 26, name: "Belo Horizonte"}
];

export const getAirports = () => {
    return airports.map((airport) => {
        return { value: airport.id, label: airport.name }
    })
}

export const getRemainingAirports = (selectedAirportId) => {
    return airports.filter((airport) => {
        return airport.id !== selectedAirportId
    })
}