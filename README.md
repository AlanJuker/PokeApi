#Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:
- Identificarnos
- Añadir pokémons a nuestro equipo
- Eliminar pokémons a nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden nuestros Pokémon

#REST Design:
- Añadir Pokémon: /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestro pokémon: PUT /team
- Sistema de credenciales