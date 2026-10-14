<template>
    <section id="tours" class="tours section section--surface">
        <div class="container">
            <div class="tours__head">
                <h2 class="section-title">Ближайшие туры</h2>
                <a href="#tours" class="tours__all tours__all--top">Все туры →</a>
            </div>

            <!-- статичные карточки — потом заменить на v-for по данным -->
            <div class="tours__list">
                <TourCard
                    meta="2 дня · лёгкий"
                    title="Озёра Карелии"
                    text="Сосновые острова, ночёвка у воды и закат над Ладогой."
                    price="9 900 ₽"
                />
                <TourCard
                    meta="3 дня · средний"
                    title="Перевалы Хибин"
                    text="Северные горы, тундра и ледяные ручьи. Подходит после пары походов."
                    price="16 500 ₽"
                />
                <TourCard
                    meta="5 дней · средний"
                    title="Долины Кавказа"
                    text="Ледники, альпийские луга и ночёвки под звёздами."
                    price="32 000 ₽"
                />
            </div>

            <a href="#tours" class="tours__all tours__all--bottom button button--large button--outline">
                Все туры
            </a>
        </div>
    </section>
</template>

<style scoped>
.tours__head {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 48px;
}

.tours__all--top {
    margin-left: auto;
    font-weight: 700;
    color: var(--color-text);
}

.tours__all--top:hover {
    color: var(--color-accent);
}

.tours__all--bottom {
    display: none;
}

.tours__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

@media (max-width: 1199.98px) {
    .tours__list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 767.98px) {
    .tours__head {
        margin-bottom: 24px;
    }

    .tours__all--top {
        display: none;
    }

    .tours__all--bottom {
        display: flex;
        width: 100%;
        margin-top: 24px;
    }

    .tours__list {
        grid-template-columns: minmax(0, 1fr);
        gap: 20px;
    }
}
</style>
