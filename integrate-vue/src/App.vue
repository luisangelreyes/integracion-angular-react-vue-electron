<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template> -->


<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Mi App Electron + Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card title="Bienvenidos a mi App" subtitle="Vuetify 3 instalado porque empresa tacaña no actualizar Vue Material" text="Ahora puedes usar todos los componentes de Material Design en tu ventana de Electron.">
          <v-card-actions>
            <v-btn color="primary" variant="tonal">Aceptar</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
