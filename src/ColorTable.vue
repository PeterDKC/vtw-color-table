<template>
    <div class="bg-white p-6 m-4 rounded">
        <a href="#" @click="toggleTable">
            Color Table ({{ colorTable.length }} rows)
            <span v-if="tableIsOpen">-</span>
            <span v-if="! tableIsOpen">+</span>
        </a>

        <div v-for="row in colorTable" class="flex" :style="{ display: displayTable }">
            <div v-for="cell in row" class="flex-1 p-2 m-1 rounded text-sm" :style="{ 'background-color': cell.color, 'color': cell.textColor }">
                {{ cell.name }} - {{cell.color}}
            </div>
        </div>
    </div>
</template>

<script>
    const colors = require('../../../tailwind.js').colors;

    export default {
        data() {
            return {
                colorTable: [],
                displayTable: "none"
            }
        },

        methods: {
            toggleTable(event) {
                event.preventDefault();

                this.displayTable = (this.displayTable === "none") ?
                    "flex" :
                    "none";
            },

            doColors() {
                let row = 0,
                    cell = 0,
                    color;

                for (color in colors) {
                    if (! this.colorTable[row]) {
                        this.colorTable[row] = [];
                    }

                    if (cell > 5 || color == "black" || color == "transparent" || color == "white") {
                        cell = 0;
                        row++;

                        continue;
                    }

                    this.colorTable[row].push({
                        name: color,
                        color: colors[color],
                        textColor: cell < 2 ? "white": "black"
                    });
                    cell++;
                }
            }
        },

        computed: {
            tableIsOpen() {
                return this.displayTable === "flex";
            }
        },

        created() {
            this.doColors();
        }
    }
</script>
