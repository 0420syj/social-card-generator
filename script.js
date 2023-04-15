document.getElementById('image-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const filenameInput = document.getElementById('filename').value;
    const filename = (filenameInput ? filenameInput : 'social-card') + '.png';

    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 1200;
    canvas.height = 630;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '60px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 30);

    ctx.font = '40px Arial';
    ctx.fillStyle = '#666666';
    ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 30);

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = filename;
    downloadLink.style.display = 'block';
});
