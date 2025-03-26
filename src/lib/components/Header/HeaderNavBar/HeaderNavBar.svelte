<script lang="ts">
  import HeaderNavBarItem from "../HeaderNavBarItem/HeaderNavBarItem.svelte"

  let activeMenu = ""

  const toggleMenu = (menu: string) => {
    activeMenu = activeMenu === menu ? "" : menu
  }
</script>

<nav
  class="text-white px-12 flex-1 space-x-10 hidden max-lg:justify-center md:flex"
>
  <HeaderNavBarItem text="Play" {activeMenu} {toggleMenu} menuId="play" />
  <a href="/news" class="mr-2 text-lg cursor-pointer">News</a>
  <a href="/opportunities" class="mr-2 text-lg cursor-pointer">Opportunities</a>
 <!-- <HeaderNavBarItem text="News" {activeMenu} {toggleMenu} menuId="news" /> -->
</nav>
