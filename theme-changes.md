# Lists

- `list-info`: not used in chi


# Navigation

- `account-swithcer`: is a component


## Page header

- `.navbar-toggle` bg-color transparent
- `.navbar.inverse` no inverse example in docs
- nav local --> tabs
  - `.navbar-local .navbar-nav > li.active > a`
    - box-shadow $color-orange-60
    - color: $color-orange-70
  - `.navbar-local`
     -  remove border bottom
  -  `.nav-stacked`
     -  background color transparent
     -  `li.selected` --> `chi-tabs .chi-collection__title`
        -  color orange-70
-  `nav > li.disabled > a` color: text-muted (grey-70)
  -   focus & hover --> same color
-   `nav-tabs`
    -   remove border bottom for tabs
    -   active element -> border bottom color orange-60
    -   hover, active:hover, active:focus --> color-orange-70
    -   disabled tab: grey-70


## Buttons

### types --> solid

- primary
  - bg-color: red-65
  - disabled
    - bg-color: grey-15
    - border-color: grey-30
    - color: grey-60
- default: 'secondary'
  - bg-color white same
  - color and border-color: red-65
- danger:
  - bg-color red70
  - border: red-60


**ver colores semanticos y en badge**

# checkbox

- cyclops cannot configure color for checkboxes?
- cyclops-icon --> meter naranja para todos?

# copy button

- does not apply a custom class

# hierarchy tree

- does not apply?

# slider 

- thumb is a svg

# Selectors changes 

| selector                                                                                 | theme        variable                                   |
|------------------------------------------------------------------------------------------|---------------------------------------------------------|
| html.cyclops .btn-outline.btn-icon .cyclops-icon                                         | $button-outline-icon-color                              |
| html.cyclops .btn-outline.btn-icon:hover .cyclops-icon                                   | $button-outline-hover-icon-color                        |
| html.cyclops .btn-outline.btn-icon:hover .cyclops-icon                                   | $button-outline-hover-icon-color                        |
| .btn-primary.btn-icon:hover .cyclops-icon                                                | $button-solid-hover-icon-color                          |
| .btn-primary.btn-icon .cyclops-icon                                                      | $button-solid-icon-color                                |
| .btn-primary .cyclops-icon                                                               | $button-solid-icon-color                                |
| .btn-primary:hover                                                                       | $button-primary-solid-hover-background-color            |
| .btn-primary:active                                                                      | $button-primary-solid-hover-background-color            |
| .dropdown .dropdown-menu                                                                 | $dropdown-button-border-color                           |
| dropdown .dropdown-menu > li a:hover                                                     | $dropdown-menu-item-hover-background-color              |
| .dropdown .dropdown-menu > li > .dropdown-text                                           | $dropdown-button-text-colo                              |
| .dropdown .dropdown-menu .divider                                                        | $divider-border-color                                   |
| .dropdown.open .btn                                                                      | $dropdown-button-active-background-color                |
| .btn-link-text                                                                           | $link-color                                             |
| .btn-link-text:hover                                                                     | $link-color                                             |
| .btn-link-text.disabled                                                                  | change color by opacity 0.4                             |
| .form-control         border                                                             | $text-input-border-color                                |
| .form-control         color                                                              | $text-input-text-color                                  |
| .form-control[disabled]        bg                                                        | $text-input-disabled-background-color                   |
| .form-control[disabled]     border                                                       | $text-input-disabled-border-color                       |
| .form-control[disabled]     color                                                        | $text-input-disabled-text-color                         |
| .form-control:focus    border                                                            | $text-input-focus-border-color                          |
| html.cyclops input[type="checkbox"], html.cyclops input[type="radio"]                    | $checkbox-border-color                                  |
| .custom-picker .control input:checked ~ .card   bg                                       | $picker-checked-background-color                        |
| .custom-picker .control input:checked ~ .card   border                                   | $picker-checked-border-color                            |
| .custom-picker .control input[disabled] ~ .card                                          | $picker-disabled-background-color                       |
| .slider-value-fill   bg-color                                                             | $range-slider-track-value-background-color              |
| .slider-value-fill                                                                        | border none                                             |
| .slider-valid-track                                                                      | $range-slider-track-background-color                    |
| .slider-min-bound-label                                                                  | $color-text-base                                         |
| fieldset[disabled] .form-control                                                          | $text-input-disabled-text-color                         |


# Color changes

- #000000
  - para inverse, bg black (same) text white
- #00857d
  - teal 70--> 007981 para bg-color
  - success: 007E44
- #0090f0
  - info, blue-70 #0075c9
- #00a59b
  - teal-60 039198
- #00d7bd
  - teal-40 2aede5
  - action-toolbar-confirm-primary (button primary)  red-65
- #02c5ae
  - teal-50: 0cd4d4
- #0b0b0c
  - alert-link: teal-80
- #0e5fdb
- #107c74
  - teal-75 no está en rebrand
  - se usa para links --> teal 80
- #1175bc
- #18a08e
  - green success 007E44
- #212529
  - color text base, #262425
  - para link, teal-80 (00555c)
  - iconos color-base orange-60 (e66400)
  - btn primary bg red-65 (e0311a), bg -hover red-80 (a22110), text white
- #333432
  - grey 90:  343333
  - se usa para bg --> orange-10 fef6f0
  - y color orange 70 
- #356a99
  - navy-70: 0a60f0
  - tag-primary (badge)
    - bg orange 60
    - border orange-60
    - text white
- #404c43
  - no está en colt
  - se usa para chart
- #545454
  - grey-70: 585657
- #585657
  - ya cambiado
- #58776a
  - chart
  - no está en colt
- #597c97
  - chart
  - no está en colt
- #59b082
  - chart
  - no está en colt
- #59c5be
  - range-slider disabled progress #599195
- #5e9354
  - chart
  - no está en colt
- #666*
  - grey-60 6a6869
  - button fill 
- #6a6869
  - greys - changed
- #8cc63f
  - chart
- #8eebe0 
  - ya cambiado
- #939393
  - grey50
  - 
- #a15c00
  - color warning, yellow-70 996100
  - icon: yellow-60 c27b00
- #a22110
  - ya no esá
- #aedeff
  - alert-info (no está en colt el color)
  - se usa el mismo para info border
  - bg blue 20
  - text blue-70
- #b1b0b0
  - no está ya
- #b1b1b1
  - text disabled: 6a6869
- #b35009
  - orange-70 ==
  - ya cambiado
- #b6163c
  - pink-75
  - card danger
  - red-70 bg
  - red-60 border 
- #b8e288
  - chart - no está
- #b96b00
  - warning: #996100
  - border, icon =
- #d0d4da
- #d44747
  - chart
- #d4d4d4 
  - grey-30 d6d3d4
  - para texto: red-65 #e0311a
  - icono orange-60
  - para border con fondo blanco d0d4d9
- #d62015
  - red-70 para errores d62c15
- #d6d3d4
- #d8f8f4
  - success green 70 007e44
- #dedede
  - grey25  dfddde
  - for hover grey-20 f2f0f1
- #e0f3ff
  - blue-20 for info light
- #e40046
  - to red 90 for danger hover
  - to red 60 for danger button ed3e27
- #e66400
- #e9fbf9
  - item hover to grey 20  f2f0f1
- #ed3e27
- #edfdfb 
- #ef476f
  - color danger: d62c15
  - icon error/danger: ed3e27
  - text red-70 d62c15
- #ff0
  - bg amarillo.
- #f0f0f0
  - grey-20 f2f0f1
  - grey10 para th
- #f1ee6b
  - chart
- #f2f0f1
- #f2fdfc
- #f5a934
  - chart
- #f5f5f5
  - grey15-- f6f4f5
  - items hover f2f0f1
- #f5f9fc
  - blue-10 no cambia
- #f6f4f5
  - disabled, satys the same
- #f8f8f8
  - grey05
  - bg color card grey10
  - sdenav bg color
- #f95e4a
  - ya cambiado
- #faecd9
  - bg warning fff8b3
- #fafafa
- #ffc7d5
  - danger border color red30
- #ffcc89
  - warning border oclor  fde162
- #ffe5ec
  - danger bg color
- #fff
- #fff5f7
  - alert danger light ffe8e5
- #262425
  - grey 100
- #939393
  - grey-50 ==
- #666666
  - grey 60: 6a6869
- #212529
  - grey-100 262425
- #404c43
- #5e9354
- #f1ee6b
- #b8e288

