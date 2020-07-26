const rules = [
    [/#{1}\s?([^\n]+)\n/g, '<h1>$1</h1>'],
    [/#{2}\s?([^\n]+)\n/g, '<h2>$1</h2>'],
    [/#{3}\s?([^\n]+)\n/g, '<h3>$1</h3>'],
    [/#{4}\s?([^\n]+)\n/g, '<h4>$1</h4>'],
    [/#{5}\s?([^\n]+)\n/g, '<h5>$1</h5>'],
    [/#{6}\s?([^\n]+)\n/g, '<h6>$1</h6>'],
    [/\*([^*]+)\*/g, '<i>$1</i>'],
    [/\*\*([^*]+)\*\*/g, '<b>$1</b>'],
];

export default {
    bind(el) {
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template);
        })
        el.innerHTML = html;
    }
}