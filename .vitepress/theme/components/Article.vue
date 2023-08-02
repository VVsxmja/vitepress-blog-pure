<template>
  <div v-if="timestamp" class="post-timestamp">
    <p v-if="timestamp.created" class="post-date">
      创建于{{ formatted('created') }}
    </p>
    <p v-if="timestamp.updated" class="post-lastupdate">
      最后编辑于{{ formatted('updated') }}
    </p>
  </div>
  <Content class="md-content" />
</template>

<script setup lang="ts">
import { data as timestamps } from "../timestamp.data";
import { useData } from "vitepress";
import { TimestampInfo, formatDate } from "../utils/posts";
const { page, site } = useData();
const { lang } = site.value;
const { filePath } = page.value;
const timestamp = timestamps[filePath];

function formatted(time: keyof TimestampInfo[keyof TimestampInfo]): string {
  return formatDate(timestamp[time], lang)?.string ?? "";
}

</script>