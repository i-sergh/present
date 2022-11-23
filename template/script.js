const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];


let mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;    
});

ctx.fillStyle = 'white';
ctx.font = '60px Verdana';
ctx.fillText('Text', 0, 90);
//ctx.strokeStyle = 'white';
//ctx.strokeRect(0, 0, 200, 100);
const data = ctx.getImageData(0, 0, 200, 100);


class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.blast = false;
        this.ticks_blast = 0;
    }
    draw(){
        //console.log('here');
        ctx.fillStyle ='green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx/distance;
        let forceDirectionY = dy/distance;
        let maxDistanse = mouse.radius;
        //let force = (maxDistanse - distance) / maxDistanse;
        this.ticks_blast += 1;
        if (this.blast){
            forceDirectionX = -forceDirectionX;
            forceDirectionY = -forceDirectionY;
            if (distance > 50 && this.ticks_blast > 10){
                this.blast = false;
                this.ticks_blast = 0;
            }
        }
        else{
            if (distance < 10 && this.ticks_blast > 10){
                console.log('here');
                this.blast = true;
                this.ticks_blast = 0;
            }
        }
        if (distance < 100){
            this.x +=  forceDirectionX * 3;
            this.y +=  forceDirectionY * 3;
        } else{
            this.size = 3;
        }
        

        
    }
}


function init(){
    particleArray = [];
    for (let i = 0; i < 10000; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x,y));
    }
    
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //console.log('here');
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate);
}


init();
animate();
//console.log(particleArray);