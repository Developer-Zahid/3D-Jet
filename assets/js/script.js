const modelElement = document.querySelector('#model')


modelElement.addEventListener('load', ()=>{
    const [material] = modelElement.model.materials;
    material.pbrMetallicRoughness.setBaseColorFactor('#202b3f');
})

document.addEventListener('mousemove', (event)=>{
    // let centerXposition = (window.innerWidth / 2) - event.clientX
    // let centerYposition = (window.innerHeight / 2) - event.clientY
    // centerXposition = (centerXposition > 60) ? 60 - (centerXposition - 60) : centerXposition;
    // centerXposition = (centerXposition < -60) ? -60 - (centerXposition + 60) : centerXposition;

    let centerXposition = 0
    let centerYposition = 0
    modelElement.orientation = `0 ${centerYposition}deg ${centerXposition}deg`
})


// Get the scrollable element (e.g., the window or a specific element)
const scrollableElement = window;

// Set the range of values for the scroll position
const scrollMin = 0;     // Minimum scroll position
const scrollMax = window.innerHeight;  // Maximum scroll position

// Set the range of values for the target value
const targetMin = 40;   // Minimum target value
const targetMax = -40;    // Maximum target value

// Calculate the target value based on the scroll position
function calculateTargetValue() {
  // Get the current scroll position
  const scrollPosition = scrollableElement.scrollY || 0;

  // Normalize the scroll position within the defined range
  const normalizedScrollPosition = (scrollPosition - scrollMin) / (scrollMax - scrollMin);

  // Calculate the target value within the desired range
  const targetValue = normalizedScrollPosition * (targetMax - targetMin) + targetMin;

  // Return the calculated target value
  return targetValue;
}

// Handle scroll events
function handleScroll() {
  // Get the target value based on the current scroll position
  const targetValue = calculateTargetValue();

  modelElement.cameraOrbit = `${targetValue}deg 0 0`
}

// Add event listener for scroll events
scrollableElement.addEventListener('scroll', handleScroll);
