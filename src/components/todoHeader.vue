<!-- eslint-disable -->
<template>
    <header>
        <nav class="container">
            <div class="branding">
                <img src="../assets/Vue_Logo_Black.png" alt="" />
                <h1>vue todos</h1>
            </div>
            <ui class="nav-routes">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </ui>
        </nav>
    </header>
</template>
<!-- eslint-disable -->
<style lang="scss" scoped>
header {
    background-color: #f1f1f1;
    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;
            img {
                max-width: 50px;
            }

            h1 {
                font-size: 24px;
            }
        }

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 12px;
            list-style: none;

            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
</style>
