!function() {
    "use strict";

    const COLOR_DEFAULT = "green";      // Белый для обычных точек на глобусе
    const COLOR_ACTIVE = "red";       // Оранжевый для активных точек на глобусе
    const COLOR_BG_DEFAULT = "blue";   // Серый для фона
    const COLOR_BG_ACTIVE = "red";    // Оранжевый для активных точек фона
    const COLOR_BG_CLOSE = "purple";     // Тёмно-серый для близких точек фона
    const COLOR_TARGET = "blue";       // Цвет линий прицела
    const COLOR_CURSOR = "blue";    // Зелёный для курсора

    function run() {
        requestAnimationFrame(run);
        pointer.ease(15);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Фон
        cb = "";
        ctx.beginPath();
        for (let i = 0, n = points.length; i < n; i++) {
            points[i].background();
        }
        ctx.fill();

        // Прицел
        ctx.fillStyle = COLOR_TARGET;
        ctx.fillRect(pointer.ex - 1, 0, 1, canvas.height);
        ctx.fillRect(0, pointer.ey - 1, canvas.width, 1);
        ctx.beginPath();
        ctx.fillStyle = COLOR_CURSOR;
        ctx.arc(pointer.ex, pointer.ey, 3, 0, Math.PI * 2);
        ctx.fill();

        // 3D-глобус
        cb = "";
        ctx.beginPath();
        for (let i = 0, n = points.length; i < n; i++) {
            points[i].globe();
        }
        ctx.fill();
    }

    // Конструктор точки
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.c = false;
        this.x0 = x;
        this.y0 = y;
        this.dist = 0;
        this.dx = 0;
        this.dy = 0;
    }

    // Отрисовка фона
    Point.prototype.background = function() {
        this.dx = (pointer.ex - mx) - this.x0 * 11;
        this.dy = (pointer.ey - my) - this.y0 * 11;
        this.dist = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        const c = this.dist < 140 ? COLOR_BG_CLOSE : (this.c ? COLOR_BG_ACTIVE : COLOR_BG_DEFAULT);
        if (c !== cb) {
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = c;
            cb = c;
        }
        const x = this.x0 * 11 + mx;
        const y = this.y0 * 11 + my;
        ctx.moveTo(x, y);
        ctx.arc(x, y, 4, 0, Math.PI * 2);
    };

    // Отрисовка глобуса
    Point.prototype.globe = function() {
        if (this.dist < 140) {
            const scale = Math.cos(0.5 * Math.PI * this.dist / 140);
            this.x = (this.x0 * 11) - (this.dx * scale) - (11 * 24) - pointer.ex + canvas.width;
            this.y = (this.y0 * 11) - (this.dy * scale) - (11 * 11) - pointer.ey + canvas.height;
            const c = this.c ? COLOR_ACTIVE : COLOR_DEFAULT;
            if (c !== cb) {
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = c;
                cb = c;
            }
            ctx.moveTo(this.x, this.y);
            ctx.arc(this.x, this.y, scale * 7, 0, Math.PI * 2);
        }
    };

    // Настройка canvas
    const canvas = {
        width: 0,
        height: 0,
        elem: document.createElement("canvas"),
        resize() {
            this.width = this.elem.width = this.elem.offsetWidth;
            this.height = this.elem.height = this.elem.offsetHeight;
            mx = (this.width * 0.5) - (11 * 22);
            my = (this.height * 0.5) - (11 * 11);
        }
    };
    const ctx = canvas.elem.getContext("2d");
    document.body.appendChild(canvas.elem);
    window.addEventListener('resize', canvas.resize.bind(canvas), false);

    // Управление указателем
    const pointer = {
        x: 0, y: 0,
        ex: 0, ey: 0,
        isDown: false,
        move(e) {
            e.preventDefault();
            const p = e.targetTouches ? e.targetTouches[0] : e;
            this.x = p.clientX;
            this.y = p.clientY;
        },
        down(e) {
            e.preventDefault();
            if (!this.isDown) {
                this.isDown = true;
                let dm = 9999, c = null;
                for (let i = 0; i < points.length; i++) {
                    const p = points[i];
                    const dx = p.x - this.x;
                    const dy = p.y - this.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 10 && d < dm) {
                        dm = d;
                        c = p;
                    }
                }
                if (c) {
                    c.c = true;
                    coordData += key.charAt(c.x0) + key.charAt(c.y0);
                    window.location.hash = coordData;
                    document.getElementById('link').href = 'https://codepen.io/ge1doot/debug/JdzXjb/#' + coordData;
                }
            }
        },
        up(e) {
            e.preventDefault();
            this.isDown = false;
        },
        ease(steps) {
            this.ex += (this.x - this.ex) / steps;
            this.ey += (this.y - this.ey) / steps;
        }
    };

    canvas.elem.addEventListener("mousedown", pointer.down.bind(pointer), false);
    canvas.elem.addEventListener("touchstart", pointer.down.bind(pointer), false);
    window.addEventListener("mousemove", pointer.move.bind(pointer), false);
    canvas.elem.addEventListener("touchmove", pointer.move.bind(pointer), false);
    window.addEventListener("mouseup", pointer.up.bind(pointer), false);
    window.addEventListener("touchend", pointer.up.bind(pointer), false);

    const points = [];
    let mx, my, cb;
    let coordData = '';

    // Разжатие мира
    const world = "001F8C0C400031F30E7FE000FF964FFFFF00FFB067FFFE001FF03FFFFA001FF07FFFFC003F806BFFF4001F8020FFF4001D007FFFF4000E80FFE7F0000600FFC6680001E07FC2180001F00FC0780001FC0F81730001FC0F80940000FC0F400F0020780F403F00007006001F00006000000640006000000080006000000000002000000000";
    let bits = "", k = 0;
    for (let i = 0; i < world.length; i += 2) {
        const o = parseInt(world.substring(i, i + 2), 16).toString(2);
        bits += "00000000".substring(0, 8 - o.length) + o;
    }
    for (let y = 0; y < 22; y++) {
        for (let x = 0; x < 48; x++) {
            if (bits.charAt(k++) === "1") points.push(new Point(x, y));
        }
    }

    // Декодирование хэша
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const hash = window.location.hash.substr(1);
    for (let i = 0; i < hash.length; i += 2) {
        const x = key.indexOf(hash.charAt(i));
        const y = key.indexOf(hash.charAt(i + 1));
        for (let j = 0; j < points.length; j++) {
            const p = points[j];
            if (x === p.x0 && y === p.y0) {
                p.c = true;
                break;
            }
        }
    }

    // Старт
    canvas.resize();
    pointer.x = canvas.width * 0.5;
    pointer.y = canvas.height * 0.5;
    run();
}();