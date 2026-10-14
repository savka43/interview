<script setup lang="ts">
defineProps<{
    meta: string;
    title: string;
    text: string;
    price: string;
    image?: string;
}>();
</script>

<template>
    <article class="tour-card">
        <div class="tour-card__image">
            <img v-if="image" :src="image" :alt="title" />
        </div>

        <div class="tour-card__body">
            <span class="tour-card__meta">{{ meta }}</span>
            <h3 class="tour-card__title">{{ title }}</h3>
            <p class="tour-card__text">{{ text }}</p>

            <div class="tour-card__footer">
                <span class="tour-card__price">{{ price }}</span>
                <a href="#prices" class="tour-card__button button button--dark">
                    Подробнее
                </a>
            </div>
        </div>
    </article>
</template>

<style scoped>
.tour-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-card);
    overflow: hidden;
    background: var(--color-background);
}

.tour-card__image {
    aspect-ratio: 16 / 9;
    background: var(--color-placeholder);
}

.tour-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tour-card__body {
    flex-grow: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.tour-card__meta {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-accent-dark);
}

.tour-card__title {
    font-size: 22px;
    line-height: 1.3;
}

.tour-card__text {
    color: var(--color-second-text);
}

/* margin-top: auto прижимает цену и кнопку к низу — карточки в ряду выровнены */
.tour-card__footer {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
}

.tour-card__price {
    font-family: var(--font-accent);
    font-size: 22px;
    font-weight: 600;
}

.tour-card__button {
    margin-left: auto;
    padding: 0 20px;
}

@media (max-width: 767.98px) {
    .tour-card__body {
        padding: 20px;
        gap: 8px;
    }

    .tour-card__title {
        font-size: 20px;
    }

    .tour-card__text {
        font-size: 15px;
    }

    .tour-card__footer {
        padding-top: 12px;
        gap: 12px;
    }

    .tour-card__price {
        font-size: 20px;
    }
}
</style>
