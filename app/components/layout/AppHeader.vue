<template>
    <header class="header">
        <div class="header__inner container">
            <NuxtLink to="/" class="logo">Тропа</NuxtLink>

            <nav class="header__nav nav" aria-label="Основное меню">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#tours" class="nav__link">Туры</a>
                    </li>
                    <li class="nav__item">
                        <a href="#why" class="nav__link">Почему мы</a>
                    </li>
                    <li class="nav__item">
                        <a href="#reviews" class="nav__link">Отзывы</a>
                    </li>
                    <li class="nav__item">
                        <a href="#prices" class="nav__link">Цены</a>
                    </li>
                </ul>
            </nav>

            <a href="#prices" class="header__button button">Записаться</a>
        </div>
    </header>
</template>

<style scoped>
/* шапка во всю ширину, ограничивает только контейнер внутри */
.header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
}

.header__inner {
    height: var(--header-height);
    display: flex;
    align-items: center;
    gap: 48px;
}

.header__button {
    margin-left: auto; /* отталкивает кнопку вправо */
}

.logo {
    font-family: var(--font-accent);
    font-weight: 600;
    font-size: 22px;
    color: var(--color-accent);
    text-decoration: none;
}

.nav__list {
    display: flex;
    gap: 32px;
}

.nav__link {
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;
}

.nav__link:hover {
    color: var(--color-accent);
}
</style>
