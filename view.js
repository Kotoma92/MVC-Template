updateView();
function updateView() {
    const html =/*html*/`

    <div>Noe HTML kode som viser fra input:"${templateInput}"</div>
    <input type="text" oninput="templateInput = this.value" value=${templateInput}>
    <button onclick="buttonOne()">Trykk her</button>
    <div>${templateDiv}</div>

    `;
    app.innerHTML = html;
}