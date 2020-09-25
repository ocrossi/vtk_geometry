TAP version 13
# Test Categorical Colors

ok 1 vtkLookupTable TestCategoricalColors
ok 2 Matching image - delta 0.10%
ok 3 Image match resolution
# Test vtkMatrixBuilder rotateFromDirections

ok 4 should be truthy
ok 5 should be truthy
ok 6 should be truthy
# Test LookupTable setTable

ok 7 vtkLookupTable TestSetTable
ok 8 should be strictly equal
ok 9 Matching image - delta 0.00%
ok 10 Image match resolution
# Test vtkBox instance

ok 11 Make sure the class definition exists
ok 12 should be truthy
# Test vtkBox intersectBox

ok 13 should be strictly equal
ok 14 should be strictly equal
ok 15 should be strictly equal
ok 16 should be strictly equal
ok 17 should be strictly equal
ok 18 should be strictly equal
ok 19 should be strictly equal
ok 20 should be strictly equal
ok 21 should be strictly equal
ok 22 should be strictly equal
ok 23 should be strictly equal
# Test vtkBox bounds

ok 24 should be strictly equal
ok 25 should be strictly equal
ok 26 should be strictly equal
ok 27 should be strictly equal
ok 28 should be strictly equal
ok 29 should be strictly equal
# Test vtkBox evaluateFunction

ok 30 should be strictly equal
ok 31 should be strictly equal
ok 32 should be strictly equal
ok 33 should be strictly equal
# Test vtkBox intersectPlane

ok 34 should be strictly equal
ok 35 should be strictly equal
ok 36 should be strictly equal
# Test vtkCell instance

ok 37 Make sure the class definition exists
ok 38 should be truthy
# Test vtkCell initialize without pointsIds

ok 39 should be strictly equal
ok 40 should be strictly equal
ok 41 should be strictly equal
ok 42 should be strictly equal
ok 43 should be strictly equal
# Test vtkCell initialize with pointsIds

ok 44 should be strictly equal
ok 45 should be strictly equal
ok 46 should be strictly equal
ok 47 should be strictly equal
ok 48 should not be strictly equal
ok 49 should be strictly equal
ok 50 should be deeply equivalent
ok 51 should be deeply equivalent
ok 52 should be deeply equivalent
# Test vtkCell deepCopy

ok 53 should not be strictly equal
ok 54 should be deeply equivalent
# Test Cone Implicit Function

ok 55 Cone Implicit Function
ok 56 Matching image - delta 0.00%
ok 57 Image match resolution
# Test vtkDataSetAttributes instance

ok 58 Make sure the class definition exists
ok 59 Make sure the newInstance method exists.
ok 60 Default number of arrays should be 0
ok 61 Default Scalars should be null
ok 62 Adding scalars empty DSA should return index of 0
ok 63 Setting scalars should return 0 (the index of the array).
ok 64 Setting scalars with an invalid name should return -1.
ok 65 Setting scalars with an invalid name should reset the attribute.
ok 66 Default Vectors should be null
ok 67 Adding vectors empty DSA should return index of 1
ok 68 Setting vectors should return 1 (the index of the array).
ok 69 Setting vectors with an invalid name should return -1.
ok 70 Setting vectors with an invalid name should reset the attribute.
ok 71 Default Normals should be null
ok 72 Adding normals empty DSA should return index of 2
ok 73 Setting normals should return 2 (the index of the array).
ok 74 Setting normals with an invalid name should return -1.
ok 75 Setting normals with an invalid name should reset the attribute.
ok 76 Default TCoords should be null
ok 77 Adding tcoords empty DSA should return index of 3
ok 78 Setting tcoords should return 3 (the index of the array).
ok 79 Setting tcoords with an invalid name should return -1.
ok 80 Setting tcoords with an invalid name should reset the attribute.
ok 81 Default Tensors should be null
ok 82 Adding tensors empty DSA should return index of 4
ok 83 Setting tensors should return 4 (the index of the array).
ok 84 Setting tensors with an invalid name should return -1.
ok 85 Setting tensors with an invalid name should reset the attribute.
ok 86 Default GlobalIds should be null
ok 87 Adding globalids empty DSA should return index of 5
ok 88 Setting globalids should return 5 (the index of the array).
ok 89 Setting globalids with an invalid name should return -1.
ok 90 Setting globalids with an invalid name should reset the attribute.
ok 91 Default PedigreeIds should be null
ok 92 Adding pedigreeids empty DSA should return index of 6
ok 93 Setting pedigreeids should return 6 (the index of the array).
ok 94 Setting pedigreeids with an invalid name should return -1.
ok 95 Setting pedigreeids with an invalid name should reset the attribute.
# Test vtkLine instance

ok 96 Make sure the class definition exists
ok 97 should be truthy
# Test vtkLine static::intersection

ok 98 Points on line
ok 99 Points on line
ok 100 Points on line
ok 101 Intersection
ok 102 should be strictly equal
ok 103 should be strictly equal
ok 104 No intersection
# Test vtkLine static::distanceToLine

ok 105 Invalid line
ok 106 should be strictly equal
ok 107 should be deeply equivalent
ok 108 On line
ok 109 should be strictly equal
ok 110 should be deeply equivalent
ok 111 should be strictly equal
ok 112 should be strictly equal
ok 113 should be deeply equivalent
ok 114 should be strictly equal
ok 115 should be strictly equal
ok 116 should be deeply equivalent
ok 117 should be strictly equal
ok 118 should be strictly equal
ok 119 should be deeply equivalent
# Test vtkLine intersectWithLine

ok 120 should be strictly equal
ok 121 should be deeply equivalent
ok 122 should be strictly equal
ok 123 should be strictly equal
ok 124 should be deeply equivalent
ok 125 should be strictly equal
ok 126 should be strictly equal
# Test vtkPlane instance

ok 127 Make sure the class definition exists
ok 128 should be truthy
# Test vtkPlane projectVector

ok 129 should be strictly equal
ok 130 should be strictly equal
ok 131 should be strictly equal
ok 132 should be strictly equal
ok 133 should be strictly equal
ok 134 should be strictly equal
ok 135 should be strictly equal
ok 136 should be strictly equal
ok 137 should be strictly equal
# Test vtkPlane projectPoint

ok 138 should be strictly equal
ok 139 should be strictly equal
ok 140 should be strictly equal
# Test vtkPlane DistanceToPlane

ok 141 should be strictly equal
ok 142 should be strictly equal
# Test vtkPlane Push

ok 143 should be strictly equal
ok 144 should be strictly equal
ok 145 should be strictly equal
# Test vtkPlane intersectWithLine

ok 146 should be strictly equal
ok 147 should be strictly equal
ok 148 should be strictly equal
ok 149 should be strictly equal
ok 150 should be strictly equal
ok 151 should be strictly equal
ok 152 should be strictly equal
ok 153 should be strictly equal
ok 154 should be strictly equal
ok 155 should be strictly equal
ok 156 should be strictly equal
ok 157 should be strictly equal
ok 158 should be strictly equal
ok 159 should be strictly equal
ok 160 should be strictly equal
ok 161 should be strictly equal
ok 162 should be strictly equal
# Test vtkPlane intersectWithPlane

ok 163 should be strictly equal
ok 164 should be strictly equal
ok 165 should be strictly equal
ok 166 should be strictly equal
ok 167 should be strictly equal
ok 168 should be strictly equal
ok 169 should be strictly equal
ok 170 should be strictly equal
ok 171 should be strictly equal
ok 172 should be strictly equal
ok 173 should be strictly equal
ok 174 should be strictly equal
ok 175 should be strictly equal
ok 176 should be strictly equal
ok 177 should be strictly equal
# Test vtkPlane evaluateFunction

ok 178 should be strictly equal
ok 179 should be strictly equal
ok 180 should be strictly equal
# Test vtkPolyData instance

ok 181 Make sure the class definition exists
ok 182 should be truthy
# Test vtkPolyData cells

ok 183 Line cell should be made of the number of points plus 1
ok 184 Triangle cells should be made of 3 points
ok 185 should be deeply equivalent
# Test vtkTriangle instance

ok 186 Make sure the class definition exists
ok 187 should be truthy
# Test vtkTriangle static::computeNormalDirection

ok 188 should be deeply equivalent
ok 189 should be deeply equivalent
ok 190 should be deeply equivalent
# Test vtkTriangle static::computeNormal

ok 191 should be deeply equivalent
ok 192 should be deeply equivalent
ok 193 should be deeply equivalent
# Test vtkTriangle intersectWithLine

ok 194 should be strictly equal
ok 195 should be strictly equal
ok 196 should be strictly equal
ok 197 should be deeply equivalent
ok 198 should be deeply equivalent
ok 199 should be strictly equal
ok 200 should be strictly equal
ok 201 should be deeply equivalent
ok 202 should be deeply equivalent
ok 203 should be strictly equal
ok 204 should be strictly equal
ok 205 should be strictly equal
ok 206 should be strictly equal
ok 207 should be deeply equivalent
# Test vtkTriangle evaluatePosition

ok 208 should be strictly equal
ok 209 should be strictly equal
ok 210 should be deeply equivalent
ok 211 should be deeply equivalent
ok 212 should be strictly equal
ok 213 should be strictly equal
ok 214 should be deeply equivalent
ok 215 should be deeply equivalent
ok 216 should be strictly equal
ok 217 should be strictly equal
ok 218 should be deeply equivalent
ok 219 should be deeply equivalent
# Test vtkCutter cutCube

ok 220 should be strictly equal
ok 221 should be strictly equal
ok 222 should be strictly equal
ok 223 should be strictly equal
ok 224 should be strictly equal
ok 225 should be strictly equal
# Test vtkAppendPolyData instance

ok 226 Make sure the class definition exists.
ok 227 Make sure an instance can be created.
# Test vtkAppendPolyData execution

ok 228 Make sure the number of points is correct.
ok 229 Make sure the output data type is correct.
ok 230 Make sure the number of polys is correct.
# Test vtkAppendPolyData rendering

ok 231 vtkAppendPolyData Rendering
ok 232 Matching image - delta 0.00%
ok 233 Image match resolution
# Test vtkCalculator instance

ok 234 Make sure the class definition exists.
ok 235 Make sure an instance can be created.
# Test vtkCalculator execution

ok 236 Output dataset exists
ok 237 The output dataset should be a vtkPolydata
ok 238 The number of points did not change between input 66 and output 66
ok 239 Output point-scalars array exists.
ok 240 Output point-scalars is "sine wave".
ok 241 Output field-data array exists.
ok 242 The uniform result variable should be 22.55; got 22.549999237060547.
# Test vtkImageStreamline instance

ok 243 Make sure the class definition exist
ok 244 Make sure the instance exist
ok 245 Default integrationStep should be 1
ok 246 Default MaximumNumberOfSteps should be 1000
ok 247 Updated value of integrationStep should be 0.1
# Test vtkImageStreamline execution

ok 248 Output dataset exist
ok 249 The output dataset should be a vtkPolydata
ok 250 The number of points should be 2228
# Test MultipleBonds

ok 251 should be truthy
ok 252 Matching image - delta 0.00%
ok 253 Image match resolution
# Test vtkTubeFilter instance

ok 254 Make sure the class definition exists.
ok 255 Make sure an instance can be created.
# Test vtkTubeFilter execution

ok 256 Make sure the output data type is double.
ok 257 Make sure the output number of points is correct without capping.
ok 258 Make sure the output number of normals is correct without capping.
ok 259 Make sure the output data type is float.
ok 260 Make sure the output number of points is correct with capping.
ok 261 Make sure the output number of normals is correct with capping.
# Test vtkTubeFilter rendering

ok 262 vtkTubeFilter Rendering
ok 263 Matching image - delta 0.00%
ok 264 Image match resolution
# Test vtkTubeFilter colorMapping

ok 265 Make sure the output number of points is correct without capping.
ok 266 Make sure the length of the radius array is correct.
ok 267 Make sure the length of the color array is correct.
ok 268 Make sure the array name to color by is correct.
ok 269 Make sure the scalar mode is correct.
ok 270 Make sure the color mode is correct.
# Test vtkTubeFilter color map rendering

ok 271 Matching image - delta 0.00%
ok 272 Image match resolution
# Test vtkWarpScalar instance

ok 273 Make sure the class definition exist
ok 274 Make sure the instance exist
ok 275 Default ScaleFactor should be 1
ok 276 Default UseNormal should be false
ok 277 Default xyPlane should be false
ok 278 Default normal should be [0, 0, 1]
ok 279 Updated value of ScaleFactor should be 2.5
# Test vtkWarpScalar execution

ok 280 Output dataset exist
ok 281 The output dataset should be a vtkPolydata
ok 282 The number of points do not change between input 50 and output 50
# Test vtkConcentricCylinderSource Rendering

ok 283 vtkConcentricCylinderSource Rendering
ok 284 Matching image - delta 0.00%
ok 285 Image match resolution
# Test vtkConeSource Rendering

ok 286 vtkConeSource Rendering
ok 287 Matching image - delta 0.00%
ok 288 Image match resolution
# Test vtkCubeSource Rendering

ok 289 vtkCubeSource Rendering
ok 290 Matching image - delta 0.69%
ok 291 Image match resolution
# Test vtkCylinderSource Rendering

ok 292 vtkCylinderSource Rendering
ok 293 Matching image - delta 0.00%
ok 294 Image match resolution
# Test vtkLineSource Rendering

ok 295 vtkLineSource Rendering
ok 296 Matching image - delta 0.24%
ok 297 Image match resolution
# Test vtkPlaneSource Rendering

ok 298 vtkPlaneSource Rendering
ok 299 Matching image - delta 0.00%
ok 300 Image match resolution
# Test vtkPointSource Rendering

ok 301 vtkPointSource Rendering
ok 302 Matching image - delta 0.00%
ok 303 Image match resolution
# Test vtkTextureMapToPlane instance

ok 304 Make sure the class definition exists
ok 305 should be truthy
# Test vtkTextureMapToPlane TCoords generation

ok 306 should be strictly equal
ok 307 should be strictly equal
ok 308 should be strictly equal
ok 309 should be strictly equal
ok 310 should be strictly equal
ok 311 should be strictly equal
ok 312 should be strictly equal
ok 313 should be strictly equal
ok 314 should be strictly equal
ok 315 should be strictly equal
ok 316 should be strictly equal
ok 317 should be strictly equal
ok 318 should be strictly equal
ok 319 should be strictly equal
ok 320 should be strictly equal
ok 321 should be strictly equal
ok 322 should be strictly equal
ok 323 should be strictly equal
ok 324 should be strictly equal
ok 325 should be strictly equal
ok 326 should be strictly equal
ok 327 should be strictly equal
ok 328 should be strictly equal
ok 329 should be strictly equal
ok 330 should be strictly equal
ok 331 should be strictly equal
ok 332 should be strictly equal
ok 333 should be strictly equal
ok 334 should be strictly equal
ok 335 should be strictly equal
ok 336 should be strictly equal
ok 337 should be strictly equal
ok 338 should be strictly equal
ok 339 should be strictly equal
ok 340 should be strictly equal
ok 341 should be strictly equal
ok 342 should be strictly equal
ok 343 should be strictly equal
ok 344 should be strictly equal
ok 345 should be strictly equal
ok 346 should be strictly equal
ok 347 should be strictly equal
ok 348 should be strictly equal
ok 349 should be strictly equal
ok 350 should be strictly equal
ok 351 should be strictly equal
ok 352 should be strictly equal
ok 353 should be strictly equal
# Test vtkTextureMapToPlane TCoords generation automatic

ok 354 should be strictly equal
ok 355 should be strictly equal
ok 356 should be strictly equal
ok 357 should be strictly equal
ok 358 should be strictly equal
ok 359 should be strictly equal
ok 360 should be strictly equal
ok 361 should be strictly equal
ok 362 should be strictly equal
ok 363 should be strictly equal
ok 364 should be strictly equal
ok 365 should be strictly equal
ok 366 should be strictly equal
ok 367 should be strictly equal
ok 368 should be strictly equal
ok 369 should be strictly equal
ok 370 should be strictly equal
ok 371 should be strictly equal
ok 372 should be strictly equal
ok 373 should be strictly equal
ok 374 should be strictly equal
ok 375 should be strictly equal
ok 376 should be strictly equal
ok 377 should be strictly equal
ok 378 should be strictly equal
ok 379 should be strictly equal
ok 380 should be strictly equal
ok 381 should be strictly equal
ok 382 should be strictly equal
ok 383 should be strictly equal
ok 384 should be strictly equal
ok 385 should be strictly equal
ok 386 should be strictly equal
ok 387 should be strictly equal
ok 388 should be strictly equal
ok 389 should be strictly equal
ok 390 should be strictly equal
ok 391 should be strictly equal
ok 392 should be strictly equal
ok 393 should be strictly equal
ok 394 should be strictly equal
ok 395 should be strictly equal
ok 396 should be strictly equal
ok 397 should be strictly equal
ok 398 should be strictly equal
ok 399 should be strictly equal
ok 400 should be strictly equal
ok 401 should be strictly equal
# Test vtkTextureMapToSphere instance

ok 402 Make sure the class definition exists
ok 403 should be truthy
# Test vtkTextureMapToSphere TCoords generation

ok 404 should be strictly equal
ok 405 should be strictly equal
ok 406 should be strictly equal
ok 407 should be strictly equal
ok 408 should be strictly equal
ok 409 should be strictly equal
ok 410 should be strictly equal
ok 411 should be strictly equal
ok 412 should be strictly equal
ok 413 should be strictly equal
ok 414 should be strictly equal
ok 415 should be strictly equal
ok 416 should be strictly equal
ok 417 should be strictly equal
ok 418 should be strictly equal
ok 419 should be strictly equal
ok 420 should be strictly equal
ok 421 should be strictly equal
ok 422 should be strictly equal
ok 423 should be strictly equal
ok 424 should be strictly equal
ok 425 should be strictly equal
ok 426 should be strictly equal
ok 427 should be strictly equal
ok 428 should be strictly equal
ok 429 should be strictly equal
ok 430 should be strictly equal
ok 431 should be strictly equal
ok 432 should be strictly equal
ok 433 should be strictly equal
ok 434 should be strictly equal
ok 435 should be strictly equal
ok 436 should be strictly equal
ok 437 should be strictly equal
ok 438 should be strictly equal
ok 439 should be strictly equal
ok 440 should be strictly equal
ok 441 should be strictly equal
ok 442 should be strictly equal
ok 443 should be strictly equal
ok 444 should be strictly equal
ok 445 should be strictly equal
ok 446 should be strictly equal
ok 447 should be strictly equal
ok 448 should be strictly equal
ok 449 should be strictly equal
ok 450 should be strictly equal
ok 451 should be strictly equal
# Test vtkImageReslice Rendering

ok 452 vtkImageReslice Rendering
ok 453 Matching image - delta 0.13%
ok 454 Image match resolution
# Test MoleculeMapper

ok 455 Filter: MoleculeToRepresentation
ok 456 should be truthy
ok 457 should be truthy
ok 458 Matching image - delta 0.00%
ok 459 Image match resolution
# Test vtkPiecewiseFunctionProxy

ok 460 Custom points should not be active in Gaussian mode
ok 461 Custom points should be active in Points mode
ok 462 Default nodes
ok 463 Default points
ok 464 Default nodes
# Test vtkAbstractMapper publicAPI

ok 465 should be strictly equal
ok 466 should be strictly equal
ok 467 should be strictly equal
ok 468 should be strictly equal
ok 469 should be strictly equal
ok 470 should be strictly equal
ok 471 should be strictly equal
ok 472 should be strictly equal
ok 473 should be strictly equal
ok 474 should be strictly equal
ok 475 should be strictly equal
ok 476 should be strictly equal
ok 477 should be strictly equal
# Test vtkCellPicker image mapper

ok 478 should be strictly equal
ok 479 should be strictly equal
ok 480 should be strictly equal
ok 481 should be strictly equal
ok 482 should be strictly equal
ok 483 should be strictly equal
ok 484 should be strictly equal
ok 485 should be strictly equal
ok 486 should be strictly equal
# Test vtkCellPicker instance

ok 487 Make sure the class definition exists
ok 488 should be truthy
# Test Interpolate Scalars Before Colors

ok 489 vtkOpenGLPolyDataMapper ColorTransferFunction
ok 490 Matching image - delta 0.47%
ok 491 Image match resolution
ok 492 vtkOpenGLPolyDataMapper ColorTransferFunction Presets
ok 493 Matching image - delta 0.00%
ok 494 Image match resolution
ok 495 vtkOpenGLPolyDataMapper ColorTransferFunction Presets
ok 496 Matching image - delta 0.00%
ok 497 Image match resolution
# Test vtkCoordinate publicAPI

ok 498 should be deeply equivalent
ok 499 should be deeply equivalent
ok 500 should be deeply equivalent
ok 501 should be deeply equivalent
ok 502 should be deeply equivalent
ok 503 should be deeply equivalent
ok 504 should be deeply equivalent
ok 505 should be deeply equivalent
ok 506 should be deeply equivalent
ok 507 should be deeply equivalent
ok 508 should be deeply equivalent
ok 509 should be deeply equivalent
ok 510 should be deeply equivalent
ok 511 should be deeply equivalent
ok 512 should be deeply equivalent
ok 513 should be deeply equivalent
ok 514 should be deeply equivalent
ok 515 should be deeply equivalent
ok 516 should be deeply equivalent
ok 517 should be deeply equivalent
ok 518 should be deeply equivalent
ok 519 should be deeply equivalent
ok 520 should be deeply equivalent
ok 521 should be deeply equivalent
ok 522 should be deeply equivalent
ok 523 should be deeply equivalent
ok 524 should be deeply equivalent
ok 525 should be deeply equivalent
ok 526 should be deeply equivalent
ok 527 should be deeply equivalent
ok 528 should be deeply equivalent
ok 529 should be deeply equivalent
ok 530 should be deeply equivalent
ok 531 should be deeply equivalent
ok 532 should be deeply equivalent
ok 533 should be deeply equivalent
ok 534 should be deeply equivalent
ok 535 should be deeply equivalent
ok 536 should be deeply equivalent
ok 537 should be deeply equivalent
ok 538 should be deeply equivalent
ok 539 should be deeply equivalent
ok 540 should be deeply equivalent
ok 541 should be deeply equivalent
ok 542 should be deeply equivalent
ok 543 should be deeply equivalent
ok 544 should be deeply equivalent
ok 545 should be deeply equivalent
ok 546 should be deeply equivalent
ok 547 should be deeply equivalent
ok 548 should be deeply equivalent
ok 549 should be deeply equivalent
ok 550 should be deeply equivalent
ok 551 should be deeply equivalent
ok 552 should be deeply equivalent
ok 553 should be deeply equivalent
ok 554 should be deeply equivalent
ok 555 should be deeply equivalent
ok 556 should be deeply equivalent
ok 557 should be deeply equivalent
ok 558 should be deeply equivalent
ok 559 should be deeply equivalent
ok 560 should be deeply equivalent
ok 561 should be deeply equivalent
ok 562 should be deeply equivalent
ok 563 should be deeply equivalent
ok 564 should be deeply equivalent
ok 565 should be deeply equivalent
ok 566 should be deeply equivalent
ok 567 should be deeply equivalent
ok 568 should be deeply equivalent
ok 569 should be deeply equivalent
# Test Follower class

ok 570 vtkFollower
ok 571 Matching image - delta 1.12%
ok 572 Image match resolution
# Test vtkGlyph3DMapper Rendering

ok 573 vtkGlyph3DMapper Rendering
ok 574 Matching image - delta 0.00%
ok 575 Image match resolution
# Test Edge Visibility

ok 576 vtkMapper EdgeVisibility
ok 577 Matching image - delta 0.00%
ok 578 Image match resolution
# Test VectorComponent

ok 579 vtkMapper Vector Component
ok 580 Matching image - delta 0.27%
ok 581 Image match resolution
# Test vtkPointPicker image mapper

ok 582 should be strictly equal
ok 583 should be strictly equal
ok 584 should be strictly equal
ok 585 should be strictly equal
ok 586 should be strictly equal
ok 587 should be strictly equal
ok 588 should be strictly equal
ok 589 should be strictly equal
ok 590 should be strictly equal
# Test vtkPointPicker instance

ok 591 Make sure the class definition exists
ok 592 should be truthy
# Test Set Actor User Matrix

ok 593 vtkActor SetUserMatrix
ok 594 Matching image - delta 0.00%
ok 595 Image match resolution
# Test multiple renderers

ok 596 Matching image - delta 0.00%
ok 597 Image match resolution
# Test vtkSphereMapper Rendering

ok 598 vtkSphereMapper Rendering
ok 599 Matching image - delta 0.00%
ok 600 Image match resolution
# Test Actor

ok 601 vtkOpenGLActor testRotate
ok 602 Matching image - delta 0.13%
ok 603 Image match resolution
# Test HardwareSelector

ok 604 vtkOpenGLHardwareSelector TestHardwareSelector
ok 605 Two props selected
ok 606 Correct props were selected
# Test HardwareSelectorGlyph

ok 607 TestHardwareSelectorGlyph
ok 608 Seven glyphs selected
ok 609 glyph 71 was the first selected
ok 610 Correct prop was selected
# Test HardwareSelector

ok 611 vtkOpenGLHardwareSelector TestHardwareSelector
ok 612 Hardware selector takes less than six normal renders (1132, 58, 102)
# Test ImageMapper

ok 613 vtkOpenGLImageMapper testImage
ok 614 Matching image - delta 0.42%
ok 615 Image match resolution
# Test ImageMapper with Nearest Neighbor interpolation

ok 616 vtkOpenGLImageMapper testImage
ok 617 Matching image - delta 0.01%
ok 618 Image match resolution
# Test ImageMapper

ok 619 vtkOpenGLImageMapper testImage
ok 620 Matching image - delta 0.00%
ok 621 Image match resolution
# Test Add Shader Replacements

ok 622 vtkOpenGLPolyDataMapper AddShaderReplacements
ok 623 Matching image - delta 0.00%
ok 624 Image match resolution
# Test Clear Shader Replacements

ok 625 vtkOpenGLPolyDataMapper ClearShaderReplacements
ok 626 Matching image - delta 0.00%
ok 627 Image match resolution
# Test Clipping planes

ok 628 vtkOpenGLPolyDataMapper setClippingPlanes
ok 629 Matching image - delta 0.00%
ok 630 Image match resolution
# Test Interpolate Scalars Before Mapping

ok 631 vtkOpenGLPolyDataMapper InterpolateScalarsBeforeColors
ok 632 Matching image - delta 0.47%
ok 633 Image match resolution
# Test SphereMapper

ok 634 vtkOpenGLSphereMapper testSphere
ok 635 Matching image - delta 0.00%
ok 636 Image match resolution
# Test vtkOpenGLSkybox Rendering

ok 637 Filter: OpenGLTexture
ok 638 Matching image - delta 0.00%
ok 639 Image match resolution
# Test vtkOpenGLSkybox Background Rendering

ok 640 Filter: OpenGLTexture
ok 641 Matching image - delta 0.00%
ok 642 Image match resolution
# Test StickMapper

ok 643 vtkOpenGLStickMapper testStick
ok 644 Matching image - delta 0.00%
ok 645 Image match resolution
# Test vtkOpenGLTexture Rendering

ok 646 Filter: OpenGLTexture
ok 647 Matching image - delta 0.00%
ok 648 Image match resolution
# Test Composite Volume Rendering

ok 649 vtkOpenGLVolumeMapper Composite
ok 650 Matching image - delta 0.07%
ok 651 Image match resolution
# Test Composite Volume Rendering with parallel projection

ok 652 vtkOpenGLVolumeMapper CompositeParallelProjection
ok 653 Matching image - delta 0.00%
ok 654 Image match resolution
# Test Composite Volume Rendering

ok 655 vtkOpenGLVolumeMapper Composite16Bit
ok 656 Matching image - delta 0.00%
ok 657 Image match resolution
ok 658 vtkOpenGLVolumeMapper Intermixed
ok 659 Matching image - delta 0.06%
ok 660 Image match resolution
ok 661 vtkOpenGLVolumeMapper IntermixedImage
ok 662 Matching image - delta 0.17%
ok 663 Image match resolution
# Test Lighted Volume Rendering

ok 664 vtkOpenGLVolumeMapper Lighting
ok 665 Matching image - delta 0.30%
ok 666 Image match resolution
# Test Maximum Intensity Projection Volume Rendering

ok 667 vtkOpenGLVolumeMapper MIP
ok 668 Matching image - delta 0.00%
ok 669 Image match resolution
# Test Minimum Intensity Projection Volume Rendering

ok 670 vtkOpenGLVolumeMapper MinIP
ok 671 Matching image - delta 0.00%
ok 672 Image match resolution
# Test Volume Rendering with Proportional Component

ok 673 vtkOpenGLVolumeMapper ProportionalComponent
ok 674 Matching image - delta 0.00%
ok 675 Image match resolution
# Test Average Intensity Projection Volume Rendering

ok 676 vtkOpenGLVolumeMapper AverageIP
ok 677 Matching image - delta 0.00%
ok 678 Image match resolution
# Macro methods algo tests

ok 679 populate publicAPI
ok 680 return input data
ok 681 Add two input arrays
ok 682 Subtract two input arrays
ok 683 Multiply two input arrays
ok 684 Divide two input arrays, using outputPort
# Macro methods scalar tests

ok 685 macro setget
ok 686 Initial gets should match defaults
ok 687 Bool get should match set
ok 688 Initial gets should match defaults
ok 689 Int get should match set
ok 690 mtime should increase after set
ok 691 mtime should not increase after idempotent set
# Macro methods array tests

ok 692 Initial gets should match defaults
ok 693 Throw if no set method declared
ok 694 Array spread set OK
ok 695 Array spread set should match get
ok 696 OK to set a single array argument
ok 697 Array set should match get
ok 698 mtime should increase after set
ok 699 Invalid number of values should throw
ok 700 Keep default value after illegal set
ok 701 mtime should not increase after idempotent set
ok 702 Invalid number of values should throw
ok 703 Keep value after illegal set
ok 704 Invalid set with string should throw
ok 705 Keep value after illegal set
# Macro methods enum tests

ok 706 Initial gets should match defaults
ok 707 Enum set should match get
ok 708 should be truthy
ok 709 Enum set by index should get matching enum value
ok 710 Setting idempotent value should return false
ok 711 Invalid enum index should throw
ok 712 Enum set out of range should be rejected
ok 713 Invalid enum string should throw
ok 714 Enum set string out of range should be rejected
ok 715 Invalid enum set with array/object should throw
ok 716 Enum set string out of range should be rejected
# Macro methods object tests

ok 717 Get entire model
ok 718 Get defaults back test
ok 719 Object should be frozen
ok 720 should be truthy
ok 721 should be truthy
ok 722 Object modified fires
ok 723 Object modified does not fire after unsubscribe
ok 724 Test mult-set
ok 725 Float get should match multi-set
ok 726 Array multi-set should match get
ok 727 should be truthy
ok 728 should be truthy
ok 729 should be falsy
ok 730 should be strictly equal
ok 731 should not throw
ok 732 All calls should do nothing after delete
# Macro methods event tests

ok 733 cbAbort1 should be called first
ok 734 cbAbort2 should be called second
ok 735 Only 2 callbacks should be invoked, not 3
ok 736 cbPriority2 should be called first
ok 737 cbPriority2 should be called first
ok 738 cbPriority1 should be called second
ok 739 cbPriority0 should be called third
ok 740 cbPriorityLast should be called last after 101ms
ok 741 cbPriority2 should be called exactly twice
# Macro methods keystore tests

ok 742 key1 should exist in keystore
ok 743 key2 should exist in keystore
ok 744 key3 should exist in keystore
ok 745 Delete key2 should succeed
ok 746 There should be no keys after clearing
# Test vtkDataArray serialization/deserialization

ok 747 Make sure the class definition exist
ok 748 Make sure the instance exist
ok 749 Make sure we can get serialize data
ok 750 Make sure we can get deserialize data
ok 751 We have two different instances
ok 752 But same serialized content
# Test vtkPoints serialization/deserialization

ok 753 Make sure the class definition exist
ok 754 Make sure the instance exist
ok 755 Make sure we can get serialize data
ok 756 Make sure we can get deserialize data
ok 757 We have two different instances
ok 758 But same serialized content
# Test vtkLookupTable serialization/deserialization

ok 759 Make sure the class definition exist
ok 760 Make sure the instance exist
ok 761 Make sure we can get serialize data
ok 762 Make sure we can get deserialize data
ok 763 We have two different instances
ok 764 But same serialized content
# Test vtkScalarsToColors serialization/deserialization

ok 765 Make sure the class definition exist
ok 766 Make sure the instance exist
ok 767 Make sure we can get serialize data
ok 768 Make sure we can get deserialize data
ok 769 We have two different instances
ok 770 But same serialized content
# Test vtkPolyData serialization/deserialization

ok 771 Make sure the class definition exist
ok 772 Make sure the instance exist
ok 773 Make sure we can get serialize data
ok 774 Make sure we can get deserialize data
ok 775 We have two different instances
ok 776 But same serialized content
# Proxy activation via config

ok 777 No initial active source
ok 778 Active source set after proxy creation
# Proxy activation via _activate()

ok 779 No initial active source
ok 780 No active source after proxy creation
ok 781 Proxy manager should be modified after proxy activation
ok 782 Active source set

1..782
# tests 782
# pass  782

# ok

