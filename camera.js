const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Bật camera
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    });
    video.srcObject = stream;
  } catch (err) {
    alert("Không thể truy cập camera!");
    console.error(err);
  }
}

// Chụp ảnh từ camera
function capture() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = canvas.toDataURL('image/png');
  console.log(imageData);
}
