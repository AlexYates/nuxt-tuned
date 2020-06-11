<template>
  <div class="flex flex-col p-2">
    <BaseHeading :level="1">this is a level 1 heading</BaseHeading>
    <BasePanel>
      <template slot="header">
        <BaseHeading :level="2"
          >default slot with level 2 heading text</BaseHeading
        >
      </template>
      <template slot="main">
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          magni voluptatem quo provident dolores explicabo itaque repellat,
          aliquam natus ad velit, reprehenderit possimus aperiam, ratione soluta
          asperiores nisi earum quos?
        </p>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit
          corrupti dolor, eius dolorum doloribus quod, beatae ipsam quam eaque,
          a fuga facere eligendi officiis impedit. Alias quasi voluptatem
          itaque?
        </p>
        <BaseLabelInput name="label">
          <template slot="label">
            a label with an
            <BaseIcon>
              <circle cx="14" cy="14" r="12" />
              <path d="M23 23 L30 30" />
              <path
                d="M9 12 L9 9 12 9 M16 9 L19 9 19 12 M9 16 L9 19 12 19 M19 16 L19 19 16 19"
              />
            </BaseIcon>
            icon too
          </template>
        </BaseLabelInput>
      </template>
      <template slot="footer">
        <BaseButton>
          before slot
          <BaseIcon>
            <circle cx="14" cy="14" r="12" />
            <path d="M23 23 L30 30" />
            <path
              d="M9 12 L9 9 12 9 M16 9 L19 9 19 12 M9 16 L9 19 12 19 M19 16 L19 19 16 19"
            />
          </BaseIcon>
          with an icon
          <template slot="default">
            <BaseHeading :level="2"
              >default slot with level 2 heading text</BaseHeading
            >
          </template>
          <template slot="after">after</template>
        </BaseButton>
      </template>
    </BasePanel>
  </div>
</template>

<script>
export default {
  components: {
    BaseButton: () => import('@/components/base/Button.vue'),
    BaseHeading: () => import('@/components/base/Heading.vue'),
    BaseIcon: () => import('@/components/base/Icon.vue'),
    BaseLabelInput: () => import('@/components/base/LabelInput.vue'),
    BasePanel: () => import('@/components/base/Panel.vue')
  }
}
</script>
