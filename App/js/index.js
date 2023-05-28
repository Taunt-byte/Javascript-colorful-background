const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function() {
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
});