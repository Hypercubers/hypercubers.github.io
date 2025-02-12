function replaceSymbols(event){
    document.querySelectorAll('span[data-replace]')
        .forEach(span => {
            span.innerHTML = span.dataset.replace;
        });
}

document$.subscribe(() => { 
    replaceSymbols();
});
