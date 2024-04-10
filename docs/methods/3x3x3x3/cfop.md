# CFOP

3D CFOP can be easily implemented on the 4D Rubik's Cube. This method was also called Sheerin-Zhao Method (Hybrid) V1, named after the people who discovered its higher dimensional equivalence.

!!! warning "Prerequisites"
    - Knowledge of how the 4D puzzle moves
    - [Notation](/notation)
    - [RKT](/techniques/rkt)
    - [3D CFOP](https://jperm.net/3x3/cfop) with 2-look OLL & PLL

## Summary

1. **Cross** — Build a cross by solving six 2c pieces on the O or D cell
2. **F2L-a** — Join 12 2c+3c pairs together and insert them into the first two layers
3. **F2L-b** — Join 8 3c+4c pairs together and insert them into the first two layers
4. **OLL-4** — Orient LC 2c, 3c, and 4c pieces using 3D EOLL and OCLL
5. **PLL-4** — Permute 2c pieces of the LL using EPLL, then solve the rest like a 3^3^

## Steps

### Cross

Using the same techniques from 3D, intuitively place the cross 2c pieces such that they lie between their centers, correctly oriented. After this step, the cross should be kept on the D layer.

### F2L-a

Find a pair of 2C and 3C pieces. Find a way to bring them onto the P slice using easy intuitve setups. Now, you should be able to pair them up using "normal" looking 3×3×3 moves.

Repeat this until you have solved all 12 2c3c pairs of F2L-a.

!!! warning "Misoriented pairs"
    It is possible to insert a pair into its slot, but rotated in place. Make sure to line it up so that it looks like a normal 3×3×3 case before inserting the pair. Oftentimes, this just means doing a Ux2 or Uz2 move beforehand.

### F2L-b

Find any 3C piece that doesn't have a U cell colour.
Find its respective 4C piece.

- If they both have the same coloured sticker on the U cell, use RKT on the U cell to pair them up.
- If the 4C is stuck in a slot in the D cell, bring the edge over the slot such that its colour on the I cell matches the 4C's colour on the I cell. Then use RKT to pair them up.
- If the 3C is stuck in a slot in the middle layer, bring the 4C on top of it until its colour on the I cell matches the 3C's colour on the I cell. Then use RKT to pair them up.
- If none of the above cases occured, then you kind of just have to fiddle around with it or pick a different pair to solve.

Repeat for all 8 3c4c pairs of F2L-b.

### OLL-4

#### 2c OLL-4

Use EOLL algorithms from 2-look OLL to orient the 2C pieces. This can always be done in 2 EOLL algorithms (or less).

#### 3c OLL-4

Use RKT to set up the slice layers of the Last Cell into configurations that look like possible OCLL cases. Then use the OCLL algorithms to solve that case. This can always be done in 3 OCLL algorithms (or less)

!!! warning "3c monotwist"
    It's possible to have just 1 3c piece twisted in place. To avoid this, make sure that your last OCLL algorithm will solve **all** of the 3c pieces. For example if you have 5 left, you can't set it up into an H OCLL case, because that will solve 4/5, leaving you with 1 left. Instead, you can set it up into a Sune case, which would then leave you with 2 (which you can solve using a T or U case OCLL algorithm).

#### 4c OLL-4

Use RKT on the Last Cell to set up the 4c pieces into possible OCLL cases. Rotate the Last Cell to U, such that your OCLL case is in the IU plane, then execute that algorithm **with RKT**.

!!! warning "4c monoflip"
    It's possible to have just 1 4c piece flipped in place. To avoid this, make sure that your last OCLL algorithm will solve **all** of the 4c pieces. For example if you have 5 left, you can't set it up into an H OCLL case, because that will solve 4/5, leaving you with 1 left. Instead, you can set it up into a Sune case, which would then leave you with 2 (which you can solve using a T or U case OCLL algorithm).

### PLL-4

#### 2c PLL-4

It is always possible to solve 2c permutation using just U-perms, but many cases have faster methods. There are seven cases for 2c PLL-4:

- **Solved**
- **Adjacent swap** - Do a 90-degree twist of I to turn this case into a 3-cycle, then use a 3D U-perm algorithm to solve it, such as `M2 U M U2 M' U M2` (7 STM) to cycle IL → IF → IR.
- **Opposite swap** - Do a 90-degree twist of I to turn this case into a pair of adjacent swaps, then use a 3D Z-perm algorithm to solve it, such as `M2 U M2 U M' U2 M2 U2 M'` (9 STM) to swap IF ↔ IR and IB ↔ IL.
- **Adjacent 3-cycle (clockwise)** - Use `[[RD, ID], {1-2}LO]` = `(RD ID RU IU) RO (IF RF IB RB) (RI)` (9 STM + 1 move RKT debt) to cycle IF → IU → IR.
- **Adjacent 3-cycle (counterclockwise)** - Use `[[RF, IF], {1-2}LI]` = `(RF IF RB IB) RI (ID RD IU RU) (RO)` (9 STM + 1 move RKT debt) to cycle IR → IU → IF.
- **Double adjacent swap (right-handed)** - Use `[[RU, IU] IR2 RU, IDR]` = `(RU IU RD IFR RU) IDR (RD IFR RU ID RD) (IUR)` (11 STM + 1 move offset) to swap IF ↔ IU and IR ↔ IB.
- **Double adjacent swap (left-handed)** - Use `[[RU, IU] IR2 RU, IUR]` = `(RU IU RD IFR RU) IUR (RD IFR RU ID RD) (IDR)` (11 STM + 1 move offset) to swap IF ↔ ID and IR ↔ IB.

This is currently no known reliable way to recognize which case you have.

#### PLL-3

From here, you use RKT to solve the rest of the puzzle like a whole 3^3^. The CFOP method is recommended for this because you arrive at this step inspectionless, meaning that in a speedsolve, you don't really have the time to count Edge Orientation, or plan a Roux First Block. Finding 4 cross pieces is pretty easy inspectionless.

!!! warning "RKT parity"
    If the "top face" of the LL is 180 degrees off from the rest of the puzzle, you have to use a special 4D algorithm to correct this. See [RKT](/techniques/rkt) for algorithms.

!!! tip "RKT parity avoidance"
    You can avoid RKT parity by using 2-look PLL. When you get to PLL, correct any RKT debt you have. Then put the solved LL corner in the UIFR spot. Now you can do whichever A-perm you have (clockwise or anticlockwise). Finally, just solve the 3c with EPLL algorithms.
