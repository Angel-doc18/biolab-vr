// A Level Mechanics lessons (0765), Upper Sixth (part 2): Newton’s laws and
// connected particles, work, energy and power, momentum and collisions,
// probability, and the mechanics revision lessons. Original text written for
// this app. g = 9.8 m s⁻² unless a question says otherwise.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_M6B = [
  // ---------- 14. Newton’s laws and connected particles ----------
  L('me-newt-1', 'mm-u6-newton', '14.1', 'Newton’s laws of motion and F = ma', 17, ['Dynamics'], [
    'Newton’s laws:\n- **first law**: a body stays at rest or moves with constant velocity unless a resultant force acts on it\n- **second law**: the resultant force equals mass × acceleration, **F = ma** (F in N, m in kg, a in m s⁻²), in the direction of the force\n- **third law**: when A exerts a force on B, B exerts an equal and opposite force on A.',
    'Method: draw a clear force diagram, take the direction of the acceleration as positive, and write **resultant force = ma** along it. Resolve at right angles to the motion to find the normal reaction, then F = μR for sliding friction.',
    'On a rough slope at angle α, a particle sliding down has a = g(sin α − μ cos α); pushed or pulled up the slope, friction acts down the slope. In a lift accelerating upwards at a, the floor pushes on a person of mass m with R = m(g + a); accelerating downwards, R = m(g − a).',
  ], 'am-rough-slope', 'Resultant force in the direction of the acceleration = ma.',
  ['A resultant force of 12 N acts on a 3 kg mass. Its acceleration is:', ['4 m s⁻²', '36 m s⁻²', '0.25 m s⁻²', '15 m s⁻²'], 'a = F/m.'],
  [['Resultant force', 'The vector sum of all the forces on a body.'], ['Newton’s second law', 'F = ma.'], ['Normal reaction', 'The push of a surface, at right angles to it.']],
  [
    { q: 'A 5 kg block is pulled along a rough horizontal floor (μ = 0.2) by a horizontal force of 25 N. Find its acceleration.', steps: ['R = 5 × 9.8 = 49 N, so friction F = 0.2 × 49 = 9.8 N.', 'Resultant force = 25 − 9.8 = 15.2 N.', '**a = 15.2 ÷ 5 = 3.04 m s⁻²**.'] },
    { q: 'A 2 kg particle slides down a rough plane inclined at 30° (μ = 0.25). Find its acceleration.', steps: ['Down the slope: 2g sin 30° − 0.25 × 2g cos 30° = 2a.', 'a = 9.8(0.5 − 0.25 × 0.866) = 9.8 × 0.2835.', '**a = 2.78 m s⁻²**.'] },
  ]),

  L('me-newt-2', 'mm-u6-newton', '14.2', 'Connected particles and pulleys', 17, ['Dynamics'], [
    'Particles joined by a light inextensible string move with the **same speed and acceleration**, and the tension is the same all along the string, also where it passes over a **smooth** pulley. Write F = ma for **each particle separately**, along its own direction of motion, then solve the equations together.',
    'Two masses m₁ > m₂ hanging over a smooth fixed pulley: m₁g − T = m₁a and T − m₂g = m₂a, so **a = (m₁ − m₂)g/(m₁ + m₂)** and **T = 2m₁m₂g/(m₁ + m₂)**. The force on the axle of the pulley is 2T.',
    'For a particle on a table or slope joined to a hanging particle, write one equation along the table (including any friction) and one vertical equation for the hanging particle. When the string breaks or the hanging particle reaches the ground, the tension becomes zero and a new stage of motion starts with a new acceleration.',
  ], 'am-pulley', 'One equation per particle, each along its own direction of motion.',
  ['Masses of 3 kg and 2 kg hang over a smooth pulley. The acceleration is:', ['1.96 m s⁻²', '9.8 m s⁻²', '4.9 m s⁻²', '2.45 m s⁻²'], '(3 − 2)g ÷ 5.'],
  [['Inextensible', 'Not stretching, so the particles move together.'], ['Smooth pulley', 'A pulley with no friction, so the tension is the same on both sides.'], ['Stage of motion', 'A part of the motion during which the forces stay the same.']],
  [
    { q: 'A 4 kg block on a smooth horizontal table is joined by a string over a smooth pulley at the edge to a 1 kg mass hanging freely. Find the acceleration and the tension.', steps: ['Hanging mass: 9.8 − T = 1a; block: T = 4a.', 'Adding: 9.8 = 5a, so a = 1.96 m s⁻².', '**a = 1.96 m s⁻², T = 4 × 1.96 = 7.84 N**.'] },
    { q: 'Repeat with a rough table, μ = 0.1.', steps: ['Friction on the block: 0.1 × 4 × 9.8 = 3.92 N.', 'Hanging mass: 9.8 − T = a; block: T − 3.92 = 4a; adding: 5.88 = 5a.', '**a = 1.18 m s⁻², T = 8.62 N**.'] },
  ]),

  // ---------- 15. Work, energy and power ----------
  L('me-wep-1', 'mm-u6-energy', '15.1', 'Work, kinetic and potential energy', 17, ['Dynamics'], [
    'The **work** done by a constant force F moving its point of application a distance s along its line is **W = Fs** (in joules, J); at angle θ to the motion, **W = Fs cos θ**. The work done against gravity in raising a mass m through a height h is **mgh**; against friction it is the friction force × the distance. A variable force F(x) does work **∫ F dx**.',
    '**Kinetic energy** KE = ½mv²; **gravitational potential energy** PE = mgh above a chosen level; **elastic potential energy** in a stretched string λx²/(2l).',
    'The **work–energy principle**: the work done by all the forces on a body equals its gain in kinetic energy. If only gravity (and elastic forces) do work, mechanical energy is **conserved**: KE + PE stays constant. Otherwise, initial energy + work done by driving forces = final energy + work done against resistances.',
  ], 'am-energy-slope', 'Energy has no direction and no time: use it when heights and speeds are given.',
  ['A 2 kg body moving at 3 m s⁻¹ has kinetic energy:', ['9 J', '6 J', '18 J', '3 J'], '½ × 2 × 3².'],
  [['Work', 'Force × distance moved along its line.'], ['Kinetic energy', '½mv², the energy of motion.'], ['Work–energy principle', 'The work done on a body equals its gain in kinetic energy.']],
  [
    { q: 'A 0.5 kg ball is thrown downwards at 4 m s⁻¹ from a height of 20 m. Find its speed on reaching the ground (no air resistance).', steps: ['Energy is conserved: ½mv² = ½m × 4² + m × 9.8 × 20.', '½v² = 8 + 196, so v² = 408.', '**v = 20.2 m s⁻¹** (the mass cancels).'] },
    { q: 'A 3 kg block slides 5 m from rest down a rough slope at 30° (μ = 0.2). Find its speed.', steps: ['PE lost = 3 × 9.8 × 5 sin 30° = 73.5 J.', 'Work against friction = 0.2 × 3 × 9.8 cos 30° × 5 = 25.5 J.', 'KE gained = 48.0 J = ½ × 3v², so **v = 5.66 m s⁻¹**.'] },
  ]),

  L('me-wep-2', 'mm-u6-energy', '15.2', 'Power', 16, ['Dynamics'], [
    '**Power** is the rate of doing work, in watts (1 W = 1 J s⁻¹): P = work done ÷ time. For a vehicle whose engine gives a driving force F at speed v, **P = Fv**.',
    'At **maximum speed** on a level road the driving force equals the resistance, so the acceleration is zero. On a hill the driving force must also overcome mg sin α, the component of the weight down the slope.',
    '**Pumping water**: raising water through a height h and ejecting it at speed v, the work done each second is (mass per second) × (gh + ½v²). A jet of cross-section A and speed v delivers a mass ρAv each second (ρ = 1000 kg m⁻³ for water).',
  ], 'am-power-curve', 'Driving force = power ÷ speed.',
  ['An engine giving a driving force of 2000 N at 15 m s⁻¹ works at:', ['30 kW', '133 W', '3 kW', '300 kW'], 'P = Fv = 30 000 W.'],
  [['Power', 'The rate of doing work, in watts.'], ['Driving force', 'The forward force from an engine: P/v.'], ['Maximum speed', 'The speed at which the driving force just balances the resistances.']],
  [
    { q: 'A car of mass 1000 kg has a maximum power of 40 kW and meets a resistance of 800 N. Find its maximum speed on a level road and its acceleration when travelling at 20 m s⁻¹ at full power.', steps: ['Maximum speed: 40 000 ÷ 800 = **50 m s⁻¹**.', 'At 20 m s⁻¹ the driving force is 40 000 ÷ 20 = 2000 N.', 'a = (2000 − 800) ÷ 1000 = **1.2 m s⁻²**.'] },
    { q: 'A pump raises 30 kg of water each second through 12 m and ejects it at 8 m s⁻¹. Find its power.', steps: ['Each second: PE gained = 30 × 9.8 × 12 = 3528 J.', 'KE given = ½ × 30 × 8² = 960 J.', 'Power = **4488 W ≈ 4.49 kW**.'] },
  ]),

  // ---------- 16. Momentum, impulse and collisions ----------
  L('me-mom-1', 'mm-u6-momentum', '16.1', 'Momentum, impulse and conservation of momentum', 16, ['Dynamics'], [
    'The **momentum** of a body is **mv** (in kg m s⁻¹, or N s), a vector in the direction of v. The **impulse** of a force is the change in momentum it produces: **I = mv − mu**; for a constant force acting for a time t, **I = Ft**.',
    '**Conservation of linear momentum**: when two bodies interact (collide, join or are pushed apart) and no external force acts along that line, their total momentum is unchanged: **m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂**. Each body receives an equal and opposite impulse (Newton’s third law).',
    'Take one direction as positive and give every velocity its sign. When bodies **coalesce** (stick together) they move on with a common velocity, and kinetic energy is lost.',
  ], 'am-collision', 'Momentum is a vector: give every velocity a sign.',
  ['A 0.2 kg ball moving at 10 m s⁻¹ is stopped. The impulse on it has size:', ['2 N s', '20 N s', '0.02 N s', '50 N s'], '0.2 × 10.'],
  [['Momentum', 'mv, a vector.'], ['Impulse', 'The change in momentum; Ft for a constant force.'], ['Coalesce', 'Stick together and move as one body.']],
  [
    { q: 'A 3 kg trolley at 4 m s⁻¹ hits and sticks to a 1 kg trolley at rest. Find their common velocity and the kinetic energy lost.', steps: ['Momentum: 3 × 4 = 4v, so v = 3 m s⁻¹.', 'KE before = ½ × 3 × 16 = 24 J; after = ½ × 4 × 9 = 18 J.', '**v = 3 m s⁻¹; 6 J of kinetic energy is lost**.'] },
    { q: 'A 0.15 kg ball reaches a bat at 20 m s⁻¹ and leaves along the same line at 30 m s⁻¹. Find the impulse and the average force if contact lasts 0.01 s.', steps: ['Positive in the direction it leaves: I = 0.15 × 30 − 0.15 × (−20).', 'I = 7.5 N s.', 'Average force = 7.5 ÷ 0.01 = **750 N** (impulse 7.5 N s).'] },
  ]),

  L('me-mom-2', 'mm-u6-momentum', '16.2', 'Newton’s law of restitution and direct impact', 17, ['Dynamics'], [
    'For two smooth spheres colliding directly, **Newton’s law of restitution**: speed of separation = e × speed of approach, that is **v₂ − v₁ = e(u₁ − u₂)**, where the **coefficient of restitution** e satisfies 0 ≤ e ≤ 1. e = 1 is **perfectly elastic** (no kinetic energy lost); e = 0 means the spheres coalesce.',
    'Use two equations together: conservation of momentum and the law of restitution. A sphere hitting a fixed smooth wall at right angles with speed u rebounds with speed eu.',
    'Kinetic energy is lost in every collision with e < 1: find the loss as KE before − KE after. A ball dropped from a height h rebounds to e²h, since its speed is multiplied by e and the height depends on the square of the speed.',
  ], 'am-collision', 'Two unknowns, two equations: momentum and restitution.',
  ['A ball hits a wall at 10 m s⁻¹ with e = 0.6. It rebounds at:', ['6 m s⁻¹', '10 m s⁻¹', '4 m s⁻¹', '16 m s⁻¹'], 'eu.'],
  [['Coefficient of restitution', 'e = speed of separation ÷ speed of approach.'], ['Perfectly elastic', 'e = 1: no kinetic energy is lost.'], ['Direct impact', 'A collision along the line joining the centres.']],
  [
    { q: 'Sphere A (2 kg, 6 m s⁻¹) hits sphere B (1 kg, at rest) directly; e = 0.5. Find their velocities after impact and the kinetic energy lost.', steps: ['Momentum: 12 = 2v₁ + v₂; restitution: v₂ − v₁ = 0.5 × 6 = 3.', 'So 12 = 3v₁ + 3: v₁ = 3 m s⁻¹ and v₂ = 6 m s⁻¹.', 'KE: 36 J before and 9 + 18 = 27 J after, so **9 J is lost** (v₁ = 3, v₂ = 6 m s⁻¹).'] },
    { q: 'A ball dropped from 2.5 m rebounds to 1.6 m. Find e.', steps: ['The rebound height is e²h.', 'e² = 1.6 ÷ 2.5 = 0.64.', '**e = 0.8**.'] },
  ]),

  // ---------- 17. Probability ----------
  L('me-prob-1', 'mm-u6-probability', '17.1', 'Probability laws and counting', 16, ['Probability'], [
    'For equally likely outcomes, **P(A) = n(A)/n(S)**, where S is the **sample space**. Always 0 ≤ P(A) ≤ 1, and **P(A′) = 1 − P(A)** for the **complement** A′. The experimental probability of A is its relative frequency in many trials.',
    '**Addition law**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Events are **mutually exclusive** when they cannot happen together (P(A ∩ B) = 0), and **exhaustive** when together they cover the whole sample space.',
    'Counting: when the outcomes are selections, use nCr for both the favourable and the total number. The probability that a hand of 3 cards from a pack of 52 contains exactly 2 hearts is 13C2 × 39C1 ÷ 52C3 = 78 × 39 ÷ 22 100 ≈ 0.138.',
  ], 'am-venn-prob', 'Check that the probabilities of exhaustive, exclusive events add up to 1.',
  ['Two fair dice are thrown. P(total = 7) is:', ['1/6', '1/12', '7/36', '1/36'], '6 of the 36 outcomes.'],
  [['Sample space', 'The set of all possible outcomes.'], ['Mutually exclusive', 'Unable to happen together.'], ['Complement', 'A′, the event that A does not happen.']],
  [
    { q: 'P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Find P(A ∩ B) and P(neither A nor B).', steps: ['P(A ∩ B) = 0.5 + 0.4 − 0.7.', '= **0.2**.', 'P(neither) = 1 − 0.7 = **0.3**.'] },
    { q: 'A committee of 3 is chosen at random from 5 men and 4 women. Find the probability that it has more women than men.', steps: ['Total: 9C3 = 84.', '2 women and 1 man: 4C2 × 5 = 30; 3 women: 4C3 = 4.', 'P = 34/84 = **17/42 ≈ 0.405**.'] },
  ]),

  L('me-prob-2', 'mm-u6-probability', '17.2', 'Conditional probability, independence and Bayes’ theorem', 17, ['Probability'], [
    '**Conditional probability**: the probability of A given that B has happened is **P(A | B) = P(A ∩ B) ÷ P(B)**. Rearranged, P(A ∩ B) = P(B) × P(A | B): this is how probabilities multiply along the branches of a **tree diagram**.',
    'A and B are **independent** when P(A | B) = P(A), or equivalently **P(A ∩ B) = P(A) × P(B)**. Do not confuse independent with mutually exclusive: exclusive events with non-zero probabilities are never independent.',
    '**Law of total probability**: if B₁, …, Bₙ are exclusive and exhaustive, **P(A) = Σ P(Bᵢ)P(A | Bᵢ)**. **Bayes’ theorem** reverses a condition: **P(Bᵢ | A) = P(Bᵢ)P(A | Bᵢ) ÷ P(A)**.',
  ], 'am-tree', 'Multiply along branches; add the branches that give the same result.',
  ['If P(A) = 0.3, P(B) = 0.5 and A and B are independent, P(A ∩ B) =', ['0.15', '0.8', '0.2', '0.65'], 'Multiply.'],
  [['Conditional probability', 'P(A | B), the probability of A given B.'], ['Independent events', 'Events with P(A ∩ B) = P(A)P(B).'], ['Bayes’ theorem', 'P(B | A) = P(B)P(A | B) ÷ P(A).']],
  [
    { q: 'A disease affects 2% of a population. A test is positive for 95% of people who have it and for 4% of people who do not. Find P(positive) and P(disease | positive).', steps: ['P(+) = 0.02 × 0.95 + 0.98 × 0.04 = 0.019 + 0.0392 = **0.0582**.', 'P(D | +) = 0.019 ÷ 0.0582.', '**≈ 0.326**: two-thirds of positive results are false alarms, because the disease is rare.'] },
    { q: 'Two cards are drawn from a pack without replacement. Find the probability that both are aces.', steps: ['P(first ace) = 4/52.', 'P(second ace | first ace) = 3/51.', 'P = 12/2652 = **1/221**.'] },
  ]),

  // ---------- 21. Revision ----------
  L('me-u6-paper1', 'mm-u6-mech-papers', '21.1', 'Mechanics questions: setting out and common errors', 14, ['Examination'], [
    'Every mechanics answer starts with a **clear diagram**: all the forces on each body, with arrows, labels and the chosen positive direction. Most lost marks come from a missing force (often the normal reaction or friction) or from a sign error.',
    'State the principle you use: "resolving parallel to the plane", "taking moments about A", "by conservation of momentum", "by Newton’s law of restitution", "by the work–energy principle". Give answers to 3 significant figures and state the value of g used.',
    'Common errors in mock scripts: one equation for a whole pulley system with the wrong mass; friction drawn the wrong way; v² = u² + 2as used when the acceleration is not constant; impulse and momentum treated as if they had no direction; the constant of integration left out in variable-acceleration questions.',
  ], 'am-mech-method', 'Diagram first, principle second, equations third.',
  ['In a connected-particle problem the safest method is to:', ['write F = ma for each particle separately', 'use one equation with the total weight', 'ignore the tension', 'take moments about the pulley'], 'Then solve the equations together.'],
  [['Principle', 'The law used for an equation, stated in words.'], ['Significant figures', 'Mechanics answers are usually given to 3.']],
  [
    { q: 'A 6 kg particle on a smooth plane inclined at 30° is joined by a string over a smooth pulley at the top of the plane to a 4 kg particle hanging freely. Find the acceleration and the tension.', steps: ['Hanging particle (down positive): 4g − T = 4a.', 'Particle on the plane (up the slope positive): T − 6g sin 30° = 6a, that is T − 3g = 6a.', 'Adding: g = 10a, so **a = 0.98 m s⁻²** (the 4 kg particle falls) and **T = 4(9.8 − 0.98) = 35.3 N**.'] },
  ]),

  L('me-u6-paper2', 'mm-u6-mech-papers', '21.2', 'Mixed practice: projectiles, collisions, energy and probability', 14, ['Examination'], [
    'Projectiles: always split the motion into horizontal and vertical parts and find the time first, since it links them. Collisions: write the momentum equation and the restitution equation with signed velocities, then check that the spheres separate (the rear one is not faster than the front one).',
    'Energy: use energy methods when a question gives heights and speeds but no times; include the work done against friction and the energy stored in elastic strings.',
    'Probability: name the events with letters, draw a tree for two-stage experiments, and give exact fractions or 3 significant figures.',
  ], 'am-projectile', 'After a collision, check that the spheres actually separate.',
  ['After a direct collision, a correct answer must have:', ['the rear sphere no faster than the front one', 'both spheres at rest', 'equal speeds', 'more kinetic energy than before'], 'Otherwise they would pass through each other.'],
  [['Mixed practice', 'Questions from several topics, as in the examination.']],
  [
    { q: 'A particle is projected at 20 m s⁻¹ at 60° above the horizontal from level ground. Find its speed when it is 10 m above the ground.', steps: ['Energy: ½v² = ½u² − gh.', 'v² = 400 − 2 × 9.8 × 10 = 204.', '**v = 14.3 m s⁻¹**, both on the way up and on the way down.'] },
  ]),
];
