<template>
    <div class="bg-white p-6 m-4 rounded">
        <div class="w-full text-center">
            <a href="#" @click="toggleTable" class="bold rounded border border-blue-dark p-2 bg-blue-dark text-white hover:bg-white hover:text-blue-dark no-underline">
                Color Table ({{ colorTable.length }} rows)
                <span v-if="tableIsOpen">-</span>
                <span v-if="! tableIsOpen">+</span>
            </a>
        </div>

        <div class="pt-4" :style="{ display: displayTable }">
            <div v-for="row in colorTable" class="flex">
                <div v-for="cell in row"
                    class="flex-1 p-2 m-1 rounded text-sm font-medium"
                    :class="{ border: cell.border }"
                    :style="{
                        'background-color': cell.color,
                        'color': cell.textColor
                    }"
                >
                    {{ cell.name }} - {{cell.color}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colors: tailwindColors,
                colorTable: [],
                displayTable: "none"
            }
        },

        methods: {
            toggleTable(event) {
                event.preventDefault();

                this.displayTable = (this.displayTable === "none") ?
                    "block" :
                    "none";
            },

            doColors() {
                let row = 0,
                    cell = 0,
                    greyscaleRow = 0,
                    color,
                    colors = this.colors;

                for (color in colors) {
                    if (! this.colorTable[row]) {
                        this.colorTable[row] = [];
                    }

                    if (cell > 5 || this.isGreyscale(color)) {
                        cell = 0;
                        row++;

                        continue;
                    }

                    this.colorTable[row].push({
                        name: color,
                        color: colors[color],
                        textColor: cell < 2 ? "white": "black",
                        border: false
                    });

                    cell++;
                }

                greyscaleRow = row + 1;

                this.colorTable[greyscaleRow] = [];

                for (color in colors) {
                    if (this.isGreyscale(color)) {
                        this.colorTable[greyscaleRow].push({
                            name: color,
                            color: colors[color],
                            textColor: this.greyscaleTextColor(color),
                            border: this.greyscaleBorder(color)
                        });
                    }
                }

                console.dir(this.colorTable);
            },

            isGreyscale(color) {
                return color == "black" || color == "transparent" || color == "white";
            },

            greyscaleTextColor(color) {
                if (color == "black") return "white";

                return "black";
            },

            greyscaleBorder(color) {
                return color !== "black";
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
