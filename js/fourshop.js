document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', function() {
        const produtoNome = this.parentElement.getAttribute('data-nome');
        const produtoPreco = this.parentElement.getAttribute('data-preco');
        
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        
        carrinho.push({ nome: produtoNome, preco: produtoPreco });
        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        alert(`${produtoNome} foi adicionado ao carrinho!`);
    });
});
