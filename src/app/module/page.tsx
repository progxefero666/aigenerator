//src\app\module\page.tsx

/**
 * author: ignacio sánchez ramírez
 * date: 2023-10-01
 * 
 * For codegen use:
 *  Template App Modulo for create fast app modules
 * 
 * Module Index Page. default includes:
 *  - header
 *  - lateral bars
 *  - main content
 */

export interface PageModule_template_Prop {
    section: string;
    chargesection: (section:string) => void
}

export default function PageModule_template({chargesection, section}: PageModule_template_Prop) {
    return (
        <div className="w-full min-h-screen flex flex-col px-2">
            <h1 className="text-2xl font-bold mb-4">Module Template</h1>
        </div>
    )

}//end comp