const canvas = document.getElementById('box');
const renderer = new THREE.WebGLRenderer({antialias:true,canvas});
const scene = new THREE.Scene();

const fov = 75;
const aspect = 2;
const near = .1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z=3;

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(1,-2,1)
scene.add(light);

function makeCube(geometry,color,pos){
    const material = new THREE.MeshPhongMaterial({color:color});
    const box = new THREE.Mesh(geometry,material);
    box.position.x = pos;
    scene.add(box);

    return box;
}

const geometry = new THREE.BoxGeometry(1,1,1);
const cubes = [
    makeCube(geometry,0x00ff00,-2),
    makeCube(geometry,0xffff00,0),
    makeCube(geometry,0x00ffff,2),
]


function render(time){
    time *=0.001;
    
    if(resizeRendererToDisplaySize(renderer)){
        let canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth/canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    cubes.forEach((cube,ndx)=>{
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    })

    renderer.render(scene, camera);

    requestAnimationFrame(render)
}


requestAnimationFrame(render)


  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }