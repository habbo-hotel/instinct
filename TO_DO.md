# API
* Session DTO needs to use `UserExists` constraint
  * Problem lies with `class-validator` and its container with Nest
* Investigate problem with `UserEntity` not being able to generate new instances