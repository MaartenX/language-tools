<></>;function render() {
<>{() => {if (true){<>
<svelteself prop1={1} />
</>}}}
<sveltecomponent this={testComponent} propa={5}>
    <h1>content</h1>
</sveltecomponent>
<sveltewindow  />
<sveltebody />
<sveltehead>
    <h1>Hi</h1>
</sveltehead>
<svelteoptions /></>
return { props: {}, slots: {} }}

export default class {
    $$prop_def = __sveltets_partial(render().props)
    $$slot_def = render().slots
}