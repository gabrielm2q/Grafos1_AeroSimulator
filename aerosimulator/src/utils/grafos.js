const conexoes = {
    0: [11, 16, 24, 25, 26],
    1: [2, 8, 23, 24],
    2: [1, 3, 23],
    3: [2, 4],
    4: [3, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [1, 9, 26],
    9: [8, 10],
    10: [9, 11, 26],
    11: [0, 10, 12],
    12: [11, 13, 15],
    13: [12, 14],
    14: [13],
    15: [12, 16, 25],
    16: [0, 15, 17, 19],
    17: [16, 18, 19],
    18: [17, 20],
    19: [16, 17, 20, 21, 24],
    20: [18, 19, 21],
    21: [19, 20, 22],
    22: [21, 23, 24],
    23: [1, 2, 22],
    24: [0, 1, 19, 22],
    25: [0, 15],
    26: [0,8,10]
};

const aeroportos = [
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
 
const printBfsTree = (start, end, graph) => {
    // Inicializa o array de visitados e de pais
    const visited = new Array(Object.keys(graph).length).fill(false);
    const parents = new Array(Object.keys(graph).length).fill(null);

    // Inicializa a fila
    const queue = [];
    queue.push(start);
    visited[start] = true;

    // Loop principal da busca em largura
    while (queue.length > 0) {
        const node = queue.shift();
        
        // Checa se é o vértice final
        if (node === end) {
        break;
        }
        
        // Adiciona os vértices adjacentes não visitados na fila
        for (let i = 0; i < graph[node].length; i++) {
        const neighbor = graph[node][i];
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            parents[neighbor] = node;
            queue.push(neighbor);
        }
    }
    }

    // Percorre a árvore a partir do nó de destino até o nó de origem, imprimindo cada nó visitado e seu respectivo pai
    let trajeto = [];
    let node = end;
    while (node !== null) {
        trajeto.push(aeroportos[node].name)
        // console.log(`${aeroportos[node].name} -> `);
        node = parents[node];
    }
    // console.log();
    return trajeto;
}
  

export const main = () => {
    return printBfsTree(0, 25, conexoes);
}