const POPULATION_SIZE = 500;
const LIFE_SPAN = 500;
let count = 0;
let population;
let countP;
let target;
let obstacle;
const MUTATION_RATE = 0.01;

function setup() {
  let cnv = createCanvas(500, 500);
  countP = createP();
  countP.parent(select("#container"));
  population = new Population(POPULATION_SIZE, MUTATION_RATE);
  cnv.parent(select("#canvas"));
  target = createVector(width / 2, 50);
  obstacle = {
    x: width / 2,
    y: height / 2 + 100,
    width: width / 2,
    height: 20,
  };
}

function draw() {
  background(0);
  population.run(count);
  count++;
  if (count == LIFE_SPAN) {
    count = 0;
    population.calculateFitness();
    // population.normalize();
    population.reproduce();
  }

  countP.html(count);
  rectMode(CENTER);
  fill(255, 0, 0);
  ellipse(target.x, target.y, 20, 20);
  fill(255);
  rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}
