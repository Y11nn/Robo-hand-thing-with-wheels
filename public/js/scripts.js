import * as THREE from '../../node_modules/three/build/three.module.js';


// Wait for the document to finish loading
window.addEventListener('load', () => {
  // Get references to the model-container element and the buttons
  const modelContainer = document.getElementById('model-container');
  const upButton = document.getElementById('up-button');
  const downButton = document.getElementById('down-button');
  const leftButton = document.getElementById('left-button');
  const rightButton = document.getElementById('right-button');

  // Set up the Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
  // Set up the Three.js renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
  modelContainer.appendChild(renderer.domElement);

  // Create a green cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position the camera
  camera.position.z = 2;

  // Function to handle button clicks
  function handleButtonClick(direction) {
    // Update cube position or rotation based on the button clicked
    switch (direction) {
      case 'up':
        cube.position.y += 0.1;
        break;
      case 'down':
        cube.position.y -= 0.1;
        break;
      case 'left':
        cube.position.x -= 0.1;
        break;
      case 'right':
        cube.position.x += 0.1;
        break;
      default:
        break;
    }
  }

  // Attach event listeners to the buttons' click events
  upButton.addEventListener('click', () => handleButtonClick('up'));
  downButton.addEventListener('click', () => handleButtonClick('down'));
  leftButton.addEventListener('click', () => handleButtonClick('left'));
  rightButton.addEventListener('click', () => handleButtonClick('right'));

  // Function to handle slider changes
  function handleSliderChange() {
    const value = parseFloat(slider.value);

    // Update cube position or rotation based on the slider value
    // For example, let's update the rotation around the y-axis
    cube.rotation.y = (value / 100) * Math.PI * 2;
  }

  // Attach event listener to the slider's input event
  slider.addEventListener('input', handleSliderChange);

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
