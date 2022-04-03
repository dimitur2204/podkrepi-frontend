import { ContentType } from './content-type'
import ExternalLink from 'components/common/ExternalLink'
import ContentTypography from './ContentTypography'
import { staticUrls } from 'common/routes'

export const COMMON_QUESTIONS: ContentType[] = [
  {
    visible: true,
    header: 'Какво представлява Подкрепи.бг?',
    content: (
      <ContentTypography>
        <p>
          Подкрепи.бг е платформа за среща между хора, които искат да съберат средства за своя кауза
          и такива, които искат да ги подкрепят с парични дарения. Подкрепи.бг работи без комисионни
          и такси за дейността си, единствените удръжки от сумите на даренията са такси, изисквани
          от трети лица - финансови и други външни организации или институции.
        </p>
        <p>
          Сдружение Подкрепи.бг работи почти изцяло с доброволци, като едва отскоро разчита и на
          временни платени позиции за придвижване на определени цели.
        </p>
        <p>
          Разходите на Организацията се покриват изцяло от индивидуални и корпоративни дарения,
          направени директно към Сдружение Подкрепи.бг.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Защо направихте нова платформа, когато вече има и други?',
    content: (
      <ContentTypography>
        <p>
          Главно - за да осигурим прозрачност в дарителството. Вярваме, че прозрачността ще
          гарантира доверието, нужно за бързото осъществяване на критични каузи.
        </p>
        <p>
          Мотивацията за старта на нашата инициатива дойде след научаването за тежки злоупотреби с
          дарителски средства от друга българска платформа. Искахме да задържим всички дарители,
          които се разочароваха от този случай и изградиха резерви към дарителството, защото
          нуждаещите се продължават да съществуват, техните нужди от дарителска помощ - също.
          Хората, които искат да помагат също продължават да бъдат някъде там и вярваме, че
          прозрачността е сериозен стимул за тях да продължат да даряват.
        </p>
        <p>
          Също така, след разговори с чудесни организации с висок кредит на обществено доверие (като
          DMS, Платформата, БДФ, BCause), установихме, че администрирането на дарителски кампании е
          предимно ръчна и доста времеемка работа. Искаме да решим и този проблем като предоставим
          удобна за ползване система с автоматизирани процеси за управление на паричните средства,
          издаване на документи и справки и др.
        </p>
        <p>
          Освен чисто технологично решение, ние предлагаме и нов модел за издръжка на организацията
          - Подкрепи.бг се финансира без удържане на комисионни и такси. Издръжката се осигурява
          единствено от лични и корпоративни дарения, насочени директно към Сдружението. Друга
          голяма помощ за бюджета на Подкрепи.бг е безплатният доброволчески труд на повечето
          участници в екипа.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Как гарантирате прозрачност и какво значи “софтуер с отворен код”?',
    content: (
      <ContentTypography>
        <p>
          Софтуер с отворен код е установена практика, при която всеки, без ограничение, може да
          отвори и прочете текста на софтуерната програма така, както е написан от програмистите. По
          този начин всеки сам може да се увери, че логиката на софтуера изпълнява само това, за
          което е предназначен. Отвореният код също дава видимост към документацията, към историята
          от промени на кода, към кода на тестовете и инсталационните скриптове, т.е. - всичко,
          което е правено до дадения момент. Допълнително всичко това помага и за проверка на
          сигурността на системата от независими одитори.
        </p>
        <p>
          Подкрепи.бг ползва платформата{' '}
          <ExternalLink variant="subtitle1" href={staticUrls.github}>
            {'GitHub'}
          </ExternalLink>{' '}
          за разработка на системи с отворен код, където всеки може да се присъедини и да допринесе
          към имплементация на функционалност.
        </p>
        <p>
          За допълнителна прозрачност, Подкрепи.бг прилага и практиката на Отворени данни, като
          предоставя рипорти за основните неконфиденциални данни от работата на системата. Това са
          например постъпилите дарения по кампаниите и трансакциите с тях, без да се разкрива
          анонимност и лични данни.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Независима организация ли сте?',
    content: (
      <ContentTypography>
        Да, напълно. Сдружение Подкрепи.бг не е обвързано с влияния от политически и друг тип
        организации и субекти. Можете да видите повече в
        <ExternalLink variant="subtitle1" href="/terms-of-service">
          {' Условията за ползване на Подкрепи.бг.'}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Защо ви отне повече от 1 година да стартирате?',
    content: (
      <ContentTypography>
        <p>
          “Ако искаш да пристигнеш бързо, тръгни сам. Ако искаш да стигнеш далеч, тръгни с екип.”
          <br />– африканска поговорка
        </p>
        <p>
          В началото, като всеки стартиращ проект, имахме доста “чуденки” относно позициониране,
          избор на технологии за платформата и партньорски огранизации. Също така, въпреки засиления
          интерес от доброволци в началото, реалният брой на активно помагащи хора е малък и
          желанието, не съответстваше напълно на отделеното време.
        </p>
        <p>
          Постарахме се да започнем дейността си максимално подготвени за нуждите на бенефициентите
          и дарителите и продължаваме да работим върху постоянното подобряване на работата си
          занапред.
        </p>
        <p>
          Екипът на Подкрепи.бг възприема дейността си с дълбока отговорност и посвети време да
          проучи дарителските практики в България и по света преди да стартира първите си кампании.
          В този проект сложността не е в създаването на система за събиране на пари, а отговорното
          управление на цялостния процес от началото на дарителската кампания до успешното
          оползотворяване на средствата с всички нужни организационни стъпки по одобряване и
          документално обезпечаване.
        </p>
        <p>
          Подкрепи.бг иска да предостави висока сигурност и да изгради обществено доверие, за да
          може да реализира устойчив дългосрочен план за подкрепа към българското общество. Това
          наложи разглеждането на всеки от елементите на дейността ни в дълбочина, създаването на
          редица методи за превенция и сигурност, относно паричните потоци, които ще преминават през
          нас, като посредник, както и консултации за разрешаване на голям брой технически, правни и
          организационни казуси.
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Как се издържа Сдружение Подкрепи.бг?',
    content: (
      <ContentTypography>
        Сдружение Подкрепи.бг се самоиздържа от корпоративни дарения (CSR политики), индивидуални
        дарения от физически лица, както и месечен или годишен членски внос от членовете на
        Сдружението. Средствата на Подкрепи.бг се съхраняват в отделна банкова сметка, а не в
        сметката за кампаниите на платформата. Това позволява максимална прозрачност в
        проследяването и отчетността на насочените дарения към Сдружението. Веднъж месечно
        Подкрепи.бг изготвя публичен отчет на приходящите дарения от изминалия месец, както и на
        основанията за разходваните суми за същия период. Всички отчети до момента можете да видите
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук. '}
        </ExternalLink>
      </ContentTypography>
    ),
  },
  {
    header: 'Мога ли и аз да стана член на Сдружението?',
    content: (
      <ContentTypography>
        Да, разбира се! Всеки, който иска да ни подкрепи, било то с труд, финансова помощ или и
        двете, може да стане член на Сдружението.{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' Tук '}
        </ExternalLink>{' '}
        можете да намерите повече информация за това как да кандидатствате за членство.
      </ContentTypography>
    ),
  },
  {
    header: 'Има ли хора на платени позиции в Подкрепи.бг?',
    content: (
      <ContentTypography>
        Към момента (януари, 2022 г.) в Сдружението работи само един човек на платена позиция, при
        това с ангажимент за 20 часа седмично. Основната причина да има само 1 платена позиция не е,
        че не ни трябват повече хора в екипа, а че Сдружението все още няма достатъчна финансова
        стабилност. Плановете ни са при първа възможност да увеличим хората, наети на пълен работен
        ден в Сдружението до 4-5 човека (2-ма - 3-ма координатори, отговарящи за кампаниите,
        координатор за маркетинг екипа и координатор на техническия екип.
      </ContentTypography>
    ),
  },
  {
    header: 'Откъде идват парите за заплатите на платените позиции в Подкрепи.бг?',
    content: (
      <ContentTypography>
        Всички средства, с които Подкрепи.бг разполага и с които разплаща заплати на платените
        позиции в екипа, са дошли от дарения от физически лица, корпоративни дарения, както и
        годишен членски внос от членовете на Сдружението. Тук можете да видите пълен списък с
        извлечения от дарените средства за Сдружението до момента.
      </ContentTypography>
    ),
  },
  {
    header: 'Какви са заплатите в Подкрепи.бг?',
    content: (
      <ContentTypography>
        За момента единственият човек, който е на заплата към Подкрепи.бг, е Главният човек в екип
        Кампании - Координатор Кампании, който е на граждански договор с ангажимент за 20 часа
        седмично. Заплатата му е 1550 лв. бруто (или 1200 лв. нето). Заплатите в Подкрепи.бг са
        адекватни на пазара на труда. Това е така, защото имаме за цел да привлечем и задържим
        качествени специалисти, което е особено важно за най-отговорните позиции в Сдружението.
      </ContentTypography>
    ),
  },
  {
    header: 'Как избирате кой да получава заплата и кой не?',
    content: (
      <ContentTypography>
        Една от задачите на Управителния съвет на Подкрепи.бг е да преценява какви са моментните и
        дългосрочните нужди на Сдружението и съответно - кои са най-критичните роли за изпълнението
        им. При наличие на достатъчен бюджет за поне 3 месеца напред, може да се вземе решение да се
        наеме допълнителен човек на заплата, било то на пълен, половин работен ден или почасова
        ангажираност.
      </ContentTypography>
    ),
  },
  {
    header: 'Мога ли да кандидатствам за работа на платена позиция в Подкрепи.бг?',
    content: (
      <ContentTypography>
        Разбира се! Можете да ни изпратите кратка мотивация и Ваше CV на anikolova@podkrepi.bg
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Защо събирате дарения за самото Сдружение?',
    content: (
      <ContentTypography>
        <p>
          Въпреки многото доброволци, които работят по Проекта в свободното си време, дейността на
          Подкрепи.бг е такава, че някои от въпросите не търпят отлагане след края на същия работен
          ден, когато повечето от нас свършват работа и едва тогава успяват да отделят време за
          доброволен труд към Проекта. За да подсигурим качественото функциониране на платформата на
          Подкрепи.бг е важно да имаме поне 3-ма - 4-ма човека на пълен работен ден, които да могат
          да извършват, координират и разпределят основните задачи и цели на Сдружението, както и да
          реагират бързо, при възникнала неотложна нужда. За момента основният ни разход е именно
          това перо.
        </p>
        <p>
          Другите оперативни разходи включват държавни/ административни такси, поддръжка на сървъри/
          хостинг, домейни и пр., които са свързани с цялостната издръжка на самото Сдружение.
          Очаква се в бъдеще да имаме логистични/ куриерски, телекомуникационни и други извънредни
          разходи. Към момента част от разходите ни са покрити от партньори, като например:
          безплатен хостинг от{' '}
          <ExternalLink variant="subtitle1" href={'https://www.superhosting.bg/'}>
            {' SuperHosting '}
          </ExternalLink>{' '}
          или офис пространство от
          <ExternalLink variant="subtitle1" href={'https://eduspace-bg.business.site/'}>
            {' Eduspace.'}
          </ExternalLink>
        </p>
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Имате ли офис?',
    content: (
      <ContentTypography>
        <p>
          Да, намира се в жк. Белите Брези, бл. 13 и ни е любезно и безвъзмездно предоставен от{' '}
          <ExternalLink variant="subtitle1" href={'https://eduspace-bg.business.site/'}>
            {' Eduspace.'}
          </ExternalLink>
        </p>
        <p>
          Добре дошли сте на място с предварителна уговорка за среща, тъй като пространството е
          споделен офис и е необходимо да резервираме стаята за срещи няколко дни по-рано. За
          уговаряне на среща в офиса можете да се свържете с нас на тел.: 0896 854747
        </p>
      </ContentTypography>
    ),
  },
  {
    header: 'Кой може да кандидатства в Подкрепи.бг за кампания? Какви са критериите?',
    content: (
      <ContentTypography>
        За кампания в Подкрепи.бг може да кандидатства всяко пълнолетно физическо лице, пребиваващо
        за постоянно на територията на Република България, с чисто съдебно и данъчно минало, както и
        български неправителствени организации. Важно е да уточним, че Организаторът може да бъде
        различно лице от Бенефициента. Например - родител може да бъде Организаторът, а
        Бенефициентът да е детето му, внукът му, брат му, друг близък роднина и т.н. Възможно е и
        Организаторът да събира средства за пълнолетен Бенефициент, който е възпрепятстван сам да
        организира кампания поради напреднала възраст, тежко здравословно състояние и др.`,
      </ContentTypography>
    ),
  },
  {
    header: 'Как се предпазвате от измами с кампаниите?',
    content: (
      <ContentTypography>
        Това е важен въпрос и за нас. Държим да подсигурим максимално средствата на дарителите и да
        се убедим, че парите им ще отиват при хора, които изпитват действителна нужда от тях за
        реализирането на действителни цели. Всяка от кампаниите в Подкрепи.бг минава през редица
        етапи на одобрение от експерти, надзорни съвети и дори - дарители (повече за това можете да
        научите тук) преди да бъде публикувана на сайта и преди да започне набирането на дарения. По
        време на самите кампании пък, всеки организатор е задължен да публикува на сайта ни публичен
        отчет за напредъка на каузата, както и за похарчените дарения. Всичко това е придружено от
        снимки и банкови документи. Освен всичко - представители на екипа ни всеки месец посещават
        част от активните кампании на място, за да се уверим в това, че парите на дарителите се
        използват за действително посочените в кампанията цели. Ако имате съмнение за злоупотреба по
        дадена кампания, можете да подадете сигнал{' '}
        <ExternalLink variant="subtitle1" href={undefined}>
          {' тук'}
        </ExternalLink>
        . След като го получим, ще разгледаме случая с внимание и ще извършим контрола, който зависи
        от нас, след което ще Ви информираме за това какво сме установили. В случай на установена
        злоупотреба, Организаторът/ Бенефициентът може да получи една от следните санкции:
        <br />
        1) При кампания в ход: Кампанията може да бъде преждевременно спряна, а Организаторът/
        Бенефициентът да загуби правото си за следващи кампании в Подкрепи.бг на база изгубено
        доверие.
        <br />
        2) При приключила вече кампания: Организаторът/ Бенефициентът може да загуби правото си за
        следващи кампании в Подкрепи.бг на база изгубено доверие.
      </ContentTypography>
    ),
  },
  {
    visible: true,
    header: 'Къде мога да направя предложение или да споделя идея за подобрение?',
    content: (
      <ContentTypography>
        Високо ценим всяко такова включване от общността! Пишете ни на info@podkrepi.bg! Ще
        отговорим при първа възможност.
      </ContentTypography>
    ),
  },
]