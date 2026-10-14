<template>
    <section id="top" class="hero">
        <div class="hero__inner container">
            <div class="hero__content">
                <span class="hero__badge">Сезон 2026 открыт</span>
                <h1 class="hero__title">Походы выходного дня без лишних забот</h1>
                <p class="hero__text">
                    Собираем маршрут, снаряжение и группу. Вам остаётся взять
                    рюкзак и приехать на вокзал.
                </p>
                <div class="hero__actions">
                    <a href="#tours" class="button button--large">Выбрать тур</a>
                    <a href="#why" class="button button--large button--outline">
                        Как это работает
                    </a>
                </div>
            </div>

            <div class="hero__image">
                <!-- <img src="..." alt="..." /> -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding: 96px 0;
}

.hero__inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 520px;
    gap: 64px;
    align-items: center;
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.hero__badge {
    align-self: flex-start;
    padding: 6px 14px;
    border-radius: 16px;
    background: var(--color-accent-soft);
    color: var(--color-accent-dark);
    font-weight: 700;
    font-size: 14px;
}

.hero__title {
    font-family: var(--font-accent);
    font-weight: 600;
    font-size: 56px;
    line-height: 1.1;
}

.hero__text {
    max-width: 52ch;
    font-size: 18px;
    color: var(--color-second-text);
}

.hero__actions {
    display: flex;
    gap: 16px;
    margin-top: 8px;
}

.hero__image {
    height: 560px;
    border-radius: var(--radius-photo);
    background: var(--color-placeholder);
    overflow: hidden;
}

.hero__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 991.98px) {
    .hero__inner {
        grid-template-columns: minmax(0, 1fr);
    }

    .hero__image {
        height: auto;
        aspect-ratio: 1 / 1;
    }
}

@media (max-width: 767.98px) {
    .hero {
        padding: 48px 0;
    }

    .hero__content {
        gap: 20px;
    }

    .hero__title {
        font-size: 32px;
        line-height: 1.15;
    }

    .hero__text {
        font-size: 16px;
    }

    .hero__actions {
        flex-direction: column;
        gap: 12px;
        margin-top: 4px;
    }
}
</style>
