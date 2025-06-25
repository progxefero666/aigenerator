
 ## generacion de clases typescript sin getters ni setters y todo publico
- Se comparten dos archivos TypeScript y un archivo SQL con el esquema de una base de 
  datos PostgreSQL, pero la funcion sera para aplicarlo a cualquier script de esquema.
  (no de inserts, updates, deletes o queries), solo para guardar en typescript todas
  las tablas de la bbdd en un formato sencillo.

- El objetivo es parsear este SQL y extraer la información de las tablas para
  crear objetos ModelTable con sus ModelField correspondien
  
1. He creado una vista para cargar archivos de código SQL de PostgreSQL con información del esquema

2. Ha creado clases contenedoras básicas en TypeScript para almacenar la información de cada tabla

3. En `sqlmodel.ts` estan las clases:

   - `Relation`: para relaciones entre tablas
   - `ModelField`: para campos de tabla con propiedades como name, type, required, generated, pk, fk, minlen, maxlen
   - `ModelTable`: para tablas con nombre y campos

4. En `sqlprocess.ts` hay una clase `CodeGenSqlProcess` con un método `getEsquemaTables` 
   que debe procesar el script SQL y devolver un array de `ModelTable`

5. Hay acceso a los tipos de campos de PostgreSQL en `fieldtypes` desde `sqltypes.json`

6. Por supuesto hay que identificat los PK y 
   y los foreing keys. Si existe alguna relacion n-->1 se guardara en la clase Relation,
   porlo que cada ModelField podria tener una array de relaciones[] pero solo se 
   añadiran estas relaciones a los campos q tengan foreign key. a los q sea solo PK 
   "NO SE AÑADIRA NINGUNA RELACION" ni indicacion de q existen 1 -> n relaciones

El rchivo SQL adjunto es el script oficial de la bbdd de postgress asi que la sintaxis
y el contenido es totalmente correcto y contiene:

- Definiciones de tablas con CREATE TABLE
- Campos con tipos como integer, character varying, boolean, date, text, timestamp
- Definiciones de secuencias (no se tienen en cuenta, solo para saber q campos son PK)
- Constraints de PRIMARY KEY (no se tienen en cuenta, solo para saber q campos son PK
- Foreign keys
- Campos con GENERATED ALWAYS AS IDENTITY para autogeneración(se tienen en cuenta 
  para saber q campos son autogenerados)
- Se tendran encuentas los 'DEFAULT' values para los campos.


1. __Objetivo__: Parsear scripts SQL de PostgreSQL para extraer la estructura de las tablas
      y convertirla en objetos TypeScript usando tus clases `ModelTable` y `ModelField`.

2. __Clases contenedoras__:

   - `ModelTable`: Almacena nombre de tabla y array de campos

   - `ModelField`: Almacena información de cada campo con:

     - `name`: nombre del campo
     - `type`: tipo de dato (usando los nombres de `fieldtypes` del JSON)
     - `pk`: si es primary key
     - `generated`: si es autogenerado (como los campos con IDENTITY)
     - `required`: si es NOT NULL
     - `minlen/maxlen`: para campos de texto con límites (como `character varying(50)`)
     - `fk` y `relations`: para claves foráneas 

3. __Dentro del esquema SQL estaran por supuesto patrones como__:

   - Campos autogenerados: `id integer NOT NULL` + `GENERATED ALWAYS AS IDENTITY`
   - Campos de texto con límite: `character varying(50)`
   - Campos con valores por defecto: `DEFAULT 'undefined'::character varying`
   - Primary keys definidas con `ADD CONSTRAINT xxx_pkey PRIMARY KEY (id)`
   - Foreign keys con `ADD CONSTRAINT xxx_fkey FOREIGN KEY`

4. __La función `getEsquemaTables`__ deberá:

   - Parsear el script SQL
   - Identificar cada `CREATE TABLE`
   - Extraer los campos con sus propiedades
   - Identificar PKs , FKs y  campos autogenerados
   - Mapear los tipos PostgreSQL a los nombres en `fieldtypes`
   - Crear objetos `ModelTable` con sus `ModelField`
   - Crear los objetos 


*** FICHEROS ADJUNTO ********

------------------------------------------------------------------------------------------------------
## fichero: sqlmodel.ts
------------------------------------------------------------------------------------------------------

import { AppConstants } from "@/app_front/appconstants";

//AppConstants.NOT_DEF = "undefined"

/**
 * class Field
 */
export class Relation {
    
    public table:string = AppConstants.NOT_DEF;    
    public field:string = AppConstants.NOT_DEF;
 
    constructor(table:string,field:string){
        this.table = table;
        this.field = field;
    }

}//end 


/**
 * class Field
 */
export class ModelField {
    
    public name:string;    
    public type:string;
    public required:boolean;
    public generated:boolean;
    public pk:boolean;
    public fk:boolean;    
    public minlen:number|null;
    public maxlen:number|null;

    public relations:Relation[]|null= null;

    constructor(name:string,type:string,
                pk:boolean,generated:boolean,
                required:boolean,minlen:number|null,maxlen:number|null,
                fk?:boolean,relations?:Relation[]){
        this.name = name;
        this.type = type;
        this.pk = pk;
        this.generated = generated; 
        this.required = required;               
        this.minlen = minlen;
        this.maxlen = maxlen;        
        this.fk = fk ?? false;    
        this.relations = relations ?? null;    
    }

}//end 

export class ModelTable {
    
    public name:string;    
    public fields:ModelField[];

    constructor(name:string,fields?:ModelField[]){
        this.name = name;
        this.fields = fields ?? [];
    }
    public addField(field:ModelField){
        this.fields.push(field);
    }
    
    public addFields(fields: ModelField[]) {
     this.fields.push(...fields);
    }

}//end class
------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------
## fichero: sqltypes.json
------------------------------------------------------------------------------------------------------
{
    "fieldtypes" : {
        "text": [
            "CHAR(n)",
            "CHARACTER(n)",
            "VARCHAR(n)",
            "CHARACTER VARYING(n)",
            "TEXT",
            "char"
        ],
        "numeric": [
            "ENTEROS",
            "SMALLINT",
            "INTEGER",
            "INT",
            "BIGINT"
        ],
        "decimal": [
            "DECIMAL",
            "NUMERIC",
            "MONEY",
            "REAL",
            "DOUBLE PRECISION",
            "FLOAT",
            "SERIALES (AUTO-INCREMENT)",
            "SMALLSERIAL",
            "SERIAL",
            "BIGSERIAL"
        ],
        "date": [
            "DATE",
            "TIME",
            "TIMESTAMP",
            "INTERVAL"
        ],
        "boolean": [
            "BOOLEAN"
        ],
        "BINARIOS": [
            "BYTEA"
        ],
        "geo": [
            "POINT",
            "LINE",
            "LSEG",
            "BOX",
            "PATH",
            "POLYGON",
            "CIRCLE"
        ],
        "net": [
            "INET",
            "CIDR",
            "MACADDR",
            "MACADDR8"
        ],
        "json": [
            "JSON",
            "JSONB"
        ],
        "uuid": [
            "UUID"
        ],
        "range": [
            "INT4RANGE",
            "INT8RANGE",
            "NUMRANGE",
            "TSRANGE",
            "DATERANGE"
        ],
        "especial": [
            "XML",
            "TSVECTOR",
            "ENUM"
        ]
    }
}
------------------------------------------------------------------------------------------------------


------------------------------------------------------------------------------------------------------
## fichero: dbesquema.json
------------------------------------------------------------------------------------------------------

--
-- Name: agent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agent (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    agtype character varying(50) NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.agent OWNER TO postgres;

--
-- Name: agent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.agent ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.agent_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    reference character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    author character varying(100) NOT NULL,
    apptype character varying(50) NOT NULL,
    proglanguage character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    osystem character varying(100) DEFAULT 'windows'::character varying NOT NULL,
    appurl character varying(500) DEFAULT 'undefined'::character varying NOT NULL,
    apppath character varying(500) DEFAULT 'undefined'::character varying NOT NULL,
    localdev boolean DEFAULT true NOT NULL,
    usedocker boolean DEFAULT false NOT NULL,
    creationdate date DEFAULT CURRENT_DATE NOT NULL,
    updatedate date DEFAULT CURRENT_DATE NOT NULL,
    description character varying(255) NOT NULL,
    controlusers boolean DEFAULT false NOT NULL,
    useui boolean DEFAULT false NOT NULL,
    useagents boolean DEFAULT false NOT NULL,
    consumedb boolean DEFAULT false NOT NULL,
    consumeapi boolean DEFAULT false NOT NULL,
    consumeai boolean DEFAULT false NOT NULL,
    exposedb boolean DEFAULT false NOT NULL,
    exposeapi boolean DEFAULT false NOT NULL
);


ALTER TABLE public.application OWNER TO postgres;

--
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.application_id_seq OWNER TO postgres;

--
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- Name: apptypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apptypes (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.apptypes OWNER TO postgres;

--
-- Name: apptypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.apptypes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.apptypes_id_seq OWNER TO postgres;

--
-- Name: apptypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.apptypes_id_seq OWNED BY public.apptypes.id;


--
-- Name: doccategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doccategory (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL
);


ALTER TABLE public.doccategory OWNER TO postgres;

--
-- Name: doccategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doccategory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doccategory_id_seq OWNER TO postgres;

--
-- Name: doccategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doccategory_id_seq OWNED BY public.doccategory.id;


--
-- Name: docprojanalisis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.docprojanalisis (
    id integer NOT NULL,
    project character varying(50) NOT NULL,
    updatedate date DEFAULT CURRENT_DATE NOT NULL,
    dtype character varying(50) NOT NULL,
    dcategory character varying(50) NOT NULL,
    content text DEFAULT 'undefined'::text NOT NULL,
    durl character varying(50) NOT NULL,
    dpath character varying(50) NOT NULL
);


ALTER TABLE public.docprojanalisis OWNER TO postgres;

--
-- Name: docprojanalisis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.docprojanalisis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.docprojanalisis_id_seq OWNER TO postgres;

--
-- Name: docprojanalisis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.docprojanalisis_id_seq OWNED BY public.docprojanalisis.id;


--
-- Name: doctype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctype (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    dataformat character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL
);


ALTER TABLE public.doctype OWNER TO postgres;

--
-- Name: doctype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doctype_id_seq OWNER TO postgres;

--
-- Name: doctype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctype_id_seq OWNED BY public.doctype.id;


--
-- Name: proglanguage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proglanguage (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.proglanguage OWNER TO postgres;

--
-- Name: proglanguage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proglanguage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proglanguage_id_seq OWNER TO postgres;

--
-- Name: proglanguage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proglanguage_id_seq OWNED BY public.proglanguage.id;


--
-- Name: server; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.server (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    srvtype character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    usedocker boolean DEFAULT false NOT NULL,
    useclaude boolean DEFAULT false NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    dbversion character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    exposedb boolean DEFAULT false NOT NULL,
    exposeapi boolean DEFAULT false NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.server OWNER TO postgres;

--
-- Name: server_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.server ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.server_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    stype character varying(50) NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    dbversion character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.service OWNER TO postgres;

--
-- Name: service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: tasktype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasktype (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text
);


ALTER TABLE public.tasktype OWNER TO postgres;

--
-- Name: tasktype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tasktype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tasktype_id_seq OWNER TO postgres;

--
-- Name: tasktype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tasktype_id_seq OWNED BY public.tasktype.id;

--
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id integer NOT NULL,
    workflow_id integer,
    name character varying(255) NOT NULL,
    wtype character varying(100) NOT NULL,
    description text,
    files text,
    folders text,
    task_order integer NOT NULL,
    is_final_task boolean DEFAULT false
);


ALTER TABLE public.task OWNER TO postgres;

--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.task_id_seq OWNER TO postgres;

--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;


--
-- Name: workflow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    context_codelang character varying(50),
    context_main character varying(255),
    context_app character varying(255),
    context_folder character varying(255),
    context_libs text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.workflow OWNER TO postgres;

--
-- Name: workflow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workflow_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.workflow_id_seq OWNER TO postgres;

--
-- Name: workflow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workflow_id_seq OWNED BY public.workflow.id;


--
-- Name: application id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- Name: apptypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptypes ALTER COLUMN id SET DEFAULT nextval('public.apptypes_id_seq'::regclass);


--
-- Name: doccategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doccategory ALTER COLUMN id SET DEFAULT nextval('public.doccategory_id_seq'::regclass);


--
-- Name: docprojanalisis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docprojanalisis ALTER COLUMN id SET DEFAULT nextval('public.docprojanalisis_id_seq'::regclass);


--
-- Name: doctype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctype ALTER COLUMN id SET DEFAULT nextval('public.doctype_id_seq'::regclass);


--
-- Name: proglanguage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proglanguage ALTER COLUMN id SET DEFAULT nextval('public.proglanguage_id_seq'::regclass);


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);


--
-- Name: tasktype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype ALTER COLUMN id SET DEFAULT nextval('public.tasktype_id_seq'::regclass);


--
-- Name: workflow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow ALTER COLUMN id SET DEFAULT nextval('public.workflow_id_seq'::regclass);


--
-- Name: agent agent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agent
    ADD CONSTRAINT agent_pkey PRIMARY KEY (id);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- Name: apptypes apptypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptypes
    ADD CONSTRAINT apptypes_pkey PRIMARY KEY (id);


--
-- Name: doccategory doccategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doccategory
    ADD CONSTRAINT doccategory_pkey PRIMARY KEY (id);


--
-- Name: docprojanalisis docprojanalisis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docprojanalisis
    ADD CONSTRAINT docprojanalisis_pkey PRIMARY KEY (id);


--
-- Name: doctype doctype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctype
    ADD CONSTRAINT doctype_pkey PRIMARY KEY (id);


--
-- Name: proglanguage proglanguage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proglanguage
    ADD CONSTRAINT proglanguage_pkey PRIMARY KEY (id);


--
-- Name: server server_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.server
    ADD CONSTRAINT server_pkey PRIMARY KEY (id);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: tasktype tasktype_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_name_key UNIQUE (name);


--
-- Name: tasktype tasktype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_pkey PRIMARY KEY (id);


--
-- Name: workflow workflow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow
    ADD CONSTRAINT workflow_pkey PRIMARY KEY (id);


--
-- Name: task task_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
------------------------------------------------------------------------------------------------------

