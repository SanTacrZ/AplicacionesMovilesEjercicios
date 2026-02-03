document.addEventListener('DOMContentLoaded', () => {
    const mario = document.getElementById('mario');
    const paisaje = document.getElementById('paisaje');
    const bloque = document.getElementById('bloque');
    const hongo = document.getElementById('hongo');

    // Estado del juego
    let posX = 50;
    let posY = 0;
    let velocityY = 0;
    const gravity = 0.8;
    const jumpStrength = 15;
    const speed = 5;
    let isJumping = false;
    let facingRight = true;
    let isSuperMario = false; // Estado Power-Up

    // Estado Hongo
    let mushroomActive = false; // Ha salido del bloque?
    let mushroomMoving = false; // Se está moviendo?
    let mushX = 380; // Posición inicial (detrás del bloque)
    let mushY = 335; // Top inicial
    const mushSpeed = 2;

    // Sprites
    const spriteStand = 'mario.png';
    const spriteRun1 = 'mario_run1.png';
    const spriteRun2 = 'mario_run2.png';
    const spriteJump = 'mario_jump.png';

    let isMoving = false;
    let frameCounter = 0;
    const frameRate = 6;

    // Audio
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    function initAudio() {
        if (!audioCtx) {
            audioCtx = new AudioContext();
        }
    }

    function playSound(type) {
        if (!audioCtx) return;

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'jump') {
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(150, now);
            oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
        } else if (type === 'bump') {
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(120, now);
            oscillator.frequency.linearRampToValueAtTime(80, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
        } else if (type === 'reveal') { // Hongo sale
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(300, now);
            oscillator.frequency.linearRampToValueAtTime(600, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
        } else if (type === 'powerup') { // Mario crece
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(440, now);
            oscillator.frequency.linearRampToValueAtTime(880, now + 0.1);
            oscillator.frequency.setValueAtTime(440, now + 0.1);
            oscillator.frequency.linearRampToValueAtTime(880, now + 0.2);
            oscillator.frequency.setValueAtTime(440, now + 0.2);
            oscillator.frequency.linearRampToValueAtTime(880, now + 0.3);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
            oscillator.start(now);
            oscillator.stop(now + 0.5);
        }
    }

    const keys = {
        ArrowRight: false,
        ArrowLeft: false,
        ArrowUp: false,
        ' ': false
    };

    document.addEventListener('keydown', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
            initAudio();
        }

        if ((e.key === 'ArrowUp' || e.key === ' ') && !isJumping) {
            velocityY = jumpStrength;
            isJumping = true;
            playSound('jump');
        }
    });

    document.addEventListener('keyup', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
        }
    });

    function update() {
        isMoving = false;

        // Mario Movimiento
        if (keys.ArrowRight) {
            posX += speed;
            facingRight = true;
            isMoving = true;
        }
        if (keys.ArrowLeft) {
            posX -= speed;
            facingRight = false;
            isMoving = true;
        }

        if (posX < 0) posX = 0;
        if (posX > paisaje.clientWidth - mario.clientWidth) {
            posX = paisaje.clientWidth - mario.clientWidth;
        }

        posY += velocityY;

        // Bloque Collision
        const bloqueYBottom = 120; // 500 - 380
        const bloqueLeft = 375;
        const bloqueRight = 425;

        const marioHeight = isSuperMario ? 100 : 50; // Altura efectiva para calculos? 
        // Visualmente crece, pero hit box base para techo sigue siendo cabeza.
        // Si crece, cabeza está más arriba. posY + height.

        if (posX + 40 > bloqueLeft && posX + 10 < bloqueRight && velocityY > 0) {
            const headY = posY + marioHeight;
            // Detección holgada
            if (headY >= bloqueYBottom && posY < bloqueYBottom) {
                posY = bloqueYBottom - marioHeight;
                velocityY = -3;
                playSound('bump');

                if (!mushroomActive) {
                    mushroomActive = true;
                    // Reset positions for respawn
                    mushX = 380;
                    mushY = 335;
                    hongo.style.left = mushX + 'px';
                    
                    hongo.style.display = 'block';
                    playSound('reveal');

                    // Animación de salida (subir)
                    let riseHeight = 0;
                    const riseInterval = setInterval(() => {
                        riseHeight += 2;
                        hongo.style.top = (335 - riseHeight) + 'px';
                        if (riseHeight >= 50) { // Subió 50px (se posa sobre el bloque)
                            clearInterval(riseInterval);
                            mushroomMoving = true;
                            mushY = 335 - 50; // 285px
                        }
                    }, 20);
                }
            }
        }

        // Gravedad Mario
        if (posY > 0) {
            velocityY -= gravity;
        } else {
            posY = 0;
            velocityY = 0;
            isJumping = false;
        }

        // Hongo Lógica
        if (mushroomMoving) {
            mushX += mushSpeed; // Mover a la derecha

            // Gravedad simple hongo (caer al suelo si pasa el bloque)
            // Bloque right edge = 425.
            if (mushX > 425 && mushY < 500 - 40) { // Si pasó el bloque y está en el aire
                mushY += 4; // Caer rápido
            } else if (mushY >= 500 - 40) { // Suelo (40px hongo)
                mushY = 500 - 40; // 460px top
            }

            hongo.style.left = mushX + 'px';
            hongo.style.top = mushY + 'px';

            // Colisión Mario vs Hongo
            // Mario Rect (aprox)
            // Hongo Rect
            // Simple check
            const mLeft = posX;
            const mRight = posX + 50;
            const mTop = 500 - (posY + marioHeight); // Top visual
            const mBottom = 500 - posY;

            const hLeft = mushX;
            const hRight = mushX + 40;
            const hTop = mushY;
            const hBottom = mushY + 40;

            if (mRight > hLeft && mLeft < hRight && mBottom > hTop && mTop < hBottom) {
                // Toco!
                hongo.style.display = 'none';
                mushroomMoving = false;
                mushroomActive = false; // Consumido (o dejarlo true para que no salga otro)

                if (!isSuperMario) {
                    isSuperMario = true;
                    playSound('powerup');
                }
            }

            // Limites mundo
            if (mushX > 800) {
                mushroomMoving = false; // Se fue
                hongo.style.display = 'none';
            }
        }


        // Render Mario
        mario.style.left = posX + 'px';
        mario.style.bottom = posY + 'px';

        let transformStr = '';
        if (facingRight) transformStr += 'scaleX(1) ';
        else transformStr += 'scaleX(-1) ';

        if (isSuperMario) transformStr += 'scale(2) '; // Doble tamaño

        mario.style.transform = transformStr;

        // Sprite
        if (isJumping) {
            mario.src = spriteJump;
        } else if (isMoving && posY === 0) {
            frameCounter++;
            if (frameCounter % frameRate === 0) {
                const toggle = Math.floor(frameCounter / frameRate) % 2 === 0;
                mario.src = toggle ? spriteRun1 : spriteRun2;
            }
        } else {
            mario.src = spriteStand;
            frameCounter = 0;
        }

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
});
