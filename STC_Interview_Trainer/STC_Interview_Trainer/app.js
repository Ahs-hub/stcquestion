const quizQuestions = [
 {id:1,cat:"STC",q:"Quelle est l'une des missions importantes de la State Trading Corporation à Rodrigues ?",opts:["Organiser les transports scolaires","Contribuer à l'approvisionnement en produits essentiels","Gérer les hôtels publics","Délivrer les permis de pêche"],a:1,why:"La STC joue un rôle dans l'approvisionnement en produits essentiels, notamment le riz et la farine."},
 {id:2,cat:"STC",q:"À quoi sert principalement un entrepôt de la STC ?",opts:["À héberger les clients","À organiser les entretiens d'embauche","À stocker les marchandises avant leur distribution","À former les conducteurs"],a:2,why:"L'entrepôt permet de conserver et gérer les marchandises avant leur distribution."},
 {id:3,cat:"STC",q:"À quels types de commerçants la STC peut-elle distribuer ses produits ?",opts:["Grossistes et détaillants","Uniquement aux touristes","Uniquement aux hôtels","Uniquement aux écoles"],a:0,why:"Les grossistes et détaillants font partie du circuit de distribution des produits."},
 {id:4,cat:"Duties",q:"Quelle tâche correspond directement au travail administratif d'un Clerical Officer ?",opts:["Réparer les équipements du port","Piloter un navire de marchandises","Classer et enregistrer des documents","Décider seul de la politique commerciale"],a:2,why:"Le classement et l'enregistrement des documents sont des tâches administratives courantes."},
 {id:5,cat:"Duties",q:"Que faut-il faire avant d'enregistrer une facture reçue ?",opts:["La jeter après lecture","Vérifier les informations et suivre la procédure prévue","La modifier sans autorisation","L'envoyer à tous les employés"],a:1,why:"Il faut vérifier les informations et appliquer la procédure de l'organisation."},
 {id:6,cat:"Duties",q:"Que signifie « tenue des registres » dans un bureau ?",opts:["Garder une trace organisée des informations et opérations","Remplacer les dossiers par des messages oraux","Effacer les anciennes données chaque jour","Conserver uniquement les documents personnels"],a:0,why:"La tenue des registres consiste à enregistrer et conserver des informations de façon organisée."},
 {id:7,cat:"Office",q:"Quel logiciel est particulièrement adapté pour créer un tableau de suivi des stocks ?",opts:["Microsoft Paint","Microsoft Excel","Un lecteur vidéo","Une application de musique"],a:1,why:"Excel permet d'organiser des données en tableaux, d'effectuer des calculs et de suivre des stocks."},
 {id:8,cat:"Office",q:"Dans Microsoft Word, quel outil permet de vérifier l'orthographe d'un document ?",opts:["Le correcteur orthographique","Le zoom de page","Le mode impression","La couleur de page"],a:0,why:"Le correcteur orthographique aide à repérer les erreurs de langue dans un document."},
 {id:9,cat:"Situations",q:"Tu remarques une erreur dans un document officiel déjà préparé. Que fais-tu ?",opts:["Tu ignores l'erreur","Tu corriges sans vérifier ni prévenir","Tu vérifies et suis la procédure ou informes ton supérieur","Tu supprimes le document"],a:2,why:"Il faut vérifier l'erreur et agir selon ses autorisations et les procédures internes."},
 {id:10,cat:"Situations",q:"Un collègue te demande de lui communiquer un dossier confidentiel sans autorisation. Comment réagis-tu ?",opts:["Tu lui envoies immédiatement","Tu refuses poliment et vérifies les autorisations","Tu publies le dossier","Tu prends une photo du dossier"],a:1,why:"Les informations confidentielles doivent être communiquées uniquement aux personnes autorisées."},
 {id:11,cat:"Situations",q:"Plusieurs tâches te sont confiées avec des délais proches. Quelle est la meilleure réaction ?",opts:["Faire les tâches au hasard","Ignorer les délais","Établir les priorités et demander des précisions si nécessaire","Attendre la fin de la journée"],a:2,why:"Prioriser les tâches et clarifier les urgences permet de respecter les délais."},
 {id:12,cat:"Situations",q:"Un client est mécontent et parle avec impatience. Que fais-tu ?",opts:["Tu gardes ton calme, écoutes et cherches une solution selon les règles","Tu réponds sur le même ton","Tu l'ignores","Tu promets quelque chose que tu ne peux pas garantir"],a:0,why:"L'écoute, le calme et le respect des procédures sont essentiels au service à la clientèle."}
];

const oralQuestions = [
 {cat:"Présentation",q:"Présentez-vous et parlez-nous brièvement de votre parcours.",hint:"Présente ton HSC, tes expériences, ta formation ICT BPO, Webcup et tes qualités. Vise 1 à 2 minutes."},
 {cat:"Motivation",q:"Pourquoi souhaitez-vous travailler à la State Trading Corporation ?",hint:"Relie ton intérêt pour l'administration à la mission de la STC et à ton envie d'évoluer."},
 {cat:"Motivation",q:"Pourquoi souhaitez-vous quitter votre emploi actuel au P'tit Monaco Casino ?",hint:"Reste positif envers ton employeur. Parle de ton évolution professionnelle et de ton intérêt pour le travail administratif."},
 {cat:"Poste",q:"Que savez-vous des responsabilités d'un Clerical Officer ?",hint:"Pense aux documents, registres, saisie de données, correspondance, calculs simples et confidentialité."},
 {cat:"Expérience",q:"Qu'avez-vous appris en travaillant à la foire de Port Mathurin avec vos parents ?",hint:"Valorise l'accueil, la vente, la gestion des clients, la présentation des produits et les transactions."},
 {cat:"Expérience",q:"Quelles compétences avez-vous développées comme Floor Attendant au casino ?",hint:"Parle du service, de l'assistance aux clients, du travail en équipe et de la précision lors des opérations de caisse."},
 {cat:"Informatique",q:"Comment votre formation ICT BPO et votre participation à Webcup peuvent-elles vous aider dans ce poste ?",hint:"Explique ce que tu as appris en outils bureautiques, informatique, résolution de problèmes et travail en équipe. Reste exact sur ton niveau."},
 {cat:"Situations",q:"Comment réagiriez-vous si vous constatiez une erreur dans un registre ou une facture ?",hint:"Décris une démarche : vérifier, respecter les autorisations, signaler si nécessaire et garder une trace."},
 {cat:"Qualités",q:"Quelles sont vos principales qualités et quel point souhaitez-vous améliorer ?",hint:"Choisis des qualités illustrées par des exemples réels. Présente un point à améliorer et les actions que tu prends."},
 {cat:"Disponibilité",q:"Si vous êtes sélectionné, quand pourriez-vous commencer à travailler ?",hint:"Réponds honnêtement en tenant compte de ton contrat et de ton éventuel préavis."}
];

const $ = id => document.getElementById(id);
const state = JSON.parse(localStorage.getItem("stcTrainerState") || '{"answers":{},"oral":{},"current":0}');
let currentView = "dashboard", selected = null, filtered = [...quizQuestions], oralIndex = 0;
function saveState(){localStorage.setItem("stcTrainerState",JSON.stringify(state));updateStats()}
function answeredCount(){return Object.keys(state.answers).length}
function correctCount(){return Object.values(state.answers).filter(x=>x.correct).length}
function reviewItems(){return quizQuestions.filter(q=>state.answers[q.id]&&!state.answers[q.id].correct)}
function updateStats(){
 const done=answeredCount(),good=correctCount(),review=reviewItems().length,pct=done?Math.round(good/done*100):0;
 $("answeredStat").textContent=done;$("totalStat").textContent=quizQuestions.length;$("correctStat").textContent=pct+"%";$("reviewStat").textContent=review;$("reviewCount").textContent=review;
 $("asideAnswered").textContent=done;$("asideCorrect").textContent=good;$("asideReview").textContent=review;
 $("progressPercent").textContent=pct+"%";$("progressRing").style.background=`conic-gradient(#315f9e ${pct*3.6}deg,#e9edf2 0deg)`;
}
function showView(view){
 currentView=view;document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));$(view+"View").classList.add("active");
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 const titles={dashboard:["PRÉPARATION À L'ENTRETIEN","Bonjour, Ahshive"],quiz:["ENTRAÎNEMENT QCM","Teste tes connaissances"],oral:["ENTRAÎNEMENT ORAL","Construis tes réponses"],revision:["RÉVISION PERSONNALISÉE","Tes points à améliorer"]};
 $("pageEyebrow").textContent=titles[view][0];$("pageTitle").textContent=titles[view][1];
 if(view==="quiz")renderQuiz();if(view==="oral")renderOral();if(view==="revision")renderRevision();
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.goto)));
$("startBtn").addEventListener("click",()=>showView("quiz"));
$("categoryFilter").addEventListener("change",e=>{filtered=e.target.value==="all"?[...quizQuestions]:quizQuestions.filter(q=>q.cat===e.target.value);state.current=0;selected=null;renderQuiz()});
function renderQuiz(){
 if(!filtered.length)return;let q=filtered[state.current]||filtered[0],saved=state.answers[q.id];selected=saved?saved.choice:null;
 $("questionCategory").textContent=({STC:"Connaissance de la STC",Duties:"Fonctions du poste",Office:"Bureau & informatique",Situations:"Situations professionnelles"})[q.cat];
 $("questionCounter").textContent=`Question ${state.current+1} / ${filtered.length}`;$("questionText").textContent=q.q;
 $("quizProgress").style.width=((state.current+1)/filtered.length*100)+"%";
 $("optionsList").innerHTML="";
 q.opts.forEach((opt,i)=>{let b=document.createElement("button");b.className="option"+(selected===i?" selected":"");b.innerHTML=`<span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text"></span>`;b.querySelector(".option-text").textContent=opt;
 if(saved){b.disabled=true;if(i===q.a)b.classList.add("correct");else if(i===saved.choice)b.classList.add("wrong")}
 b.addEventListener("click",()=>{if(state.answers[q.id])return;selected=i;document.querySelectorAll(".option").forEach((el,j)=>el.classList.toggle("selected",j===i));$("checkAnswer").disabled=false});$("optionsList").appendChild(b)});
 $("feedback").hidden=!saved;$("feedback").className="feedback "+(saved?(saved.correct?"good":"bad"):"");
 if(saved)$("feedback").textContent=(saved.correct?"Bonne réponse. ":"Réponse incorrecte. ")+q.why;
 $("checkAnswer").hidden=!!saved;$("checkAnswer").disabled=selected===null||!!saved;$("nextQuestion").hidden=!saved;
 $("previousQuestion").disabled=state.current===0;updateStats();
}
$("checkAnswer").addEventListener("click",()=>{let q=filtered[state.current];if(selected===null)return;state.answers[q.id]={choice:selected,correct:selected===q.a};saveState();renderQuiz()});
$("nextQuestion").addEventListener("click",()=>{if(state.current<filtered.length-1){state.current++;renderQuiz()}else{toast("Tu as terminé cette série de QCM.");showView("dashboard")}});
$("previousQuestion").addEventListener("click",()=>{if(state.current>0){state.current--;renderQuiz()}});
function renderOral(){
 $("oralList").innerHTML="";oralQuestions.forEach((q,i)=>{let b=document.createElement("button");b.className=i===oralIndex?"active":"";b.innerHTML=`<small>${q.cat.toUpperCase()}</small>${q.q}`;b.addEventListener("click",()=>{saveCurrentOral();oralIndex=i;renderOral()});$("oralList").appendChild(b)});
 let q=oralQuestions[oralIndex];$("oralCategory").textContent=q.cat;$("oralCounter").textContent=`Question ${oralIndex+1} / ${oralQuestions.length}`;$("oralQuestion").textContent=q.q;$("oralHint").textContent="Conseil : "+q.hint;$("oralAnswer").value=state.oral[oralIndex]||"";updateWordCount();$("copyNotice").textContent="";
}
function saveCurrentOral(){state.oral[oralIndex]=$("oralAnswer").value;saveState()}
$("oralAnswer").addEventListener("input",()=>{state.oral[oralIndex]=$("oralAnswer").value;saveState();updateWordCount()});
function updateWordCount(){let n=$("oralAnswer").value.trim()? $("oralAnswer").value.trim().split(/\s+/).length:0;$("wordCount").textContent=n+" mot"+(n>1?"s":"")}
$("saveAnswer").addEventListener("click",()=>{saveCurrentOral();toast("Réponse enregistrée.")});
async function copyText(text){try{await navigator.clipboard.writeText(text);return true}catch(e){let t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();let ok=document.execCommand("copy");t.remove();return ok}}
$("copyAnswer").addEventListener("click",async()=>{saveCurrentOral();let ok=await copyText($("oralAnswer").value);$("copyNotice").textContent=ok?"Ta réponse a été copiée.":"Copie impossible : sélectionne le texte manuellement."});
$("copyForAI").addEventListener("click",async()=>{saveCurrentOral();let q=oralQuestions[oralIndex],answer=$("oralAnswer").value.trim();if(!answer){$("copyNotice").textContent="Écris d'abord ta réponse avant de la copier.";return}
let prompt=`Agis comme un coach de préparation à un entretien d'embauche pour le poste de Clerical Officer à la State Trading Corporation (STC), Rodrigues.\n\nQuestion du jury : ${q.q}\n\nRéponse du candidat :\n${answer}\n\nÉvalue cette réponse de façon constructive :\n1. Donne une note sur 10.\n2. Identifie les points forts.\n3. Indique ce qui manque ou doit être corrigé.\n4. Corrige le français sans changer les faits personnels.\n5. Propose une réponse naturelle et professionnelle, facile à dire à l'oral.\n6. Pose une question de relance possible.\nNe crée aucune expérience ou qualification qui n'est pas mentionnée.`;
let ok=await copyText(prompt);$("copyNotice").textContent=ok?"Question et réponse copiées. Colle-les dans ChatGPT ou Claude.":"Copie impossible : sélectionne le texte manuellement.";});
function renderRevision(){let items=reviewItems();$("revisionList").innerHTML="";if(!items.length){$("revisionList").innerHTML='<div class="empty-state">Excellent ! Aucune question à réviser pour le moment.<br>Les réponses incorrectes apparaîtront ici.</div>';return}
items.forEach(q=>{let div=document.createElement("div");div.className="revision-item";let left=document.createElement("div");let b=document.createElement("b");b.textContent=q.q;let p=document.createElement("p");p.textContent="Bonne réponse : "+q.opts[q.a];left.append(b,p);let btn=document.createElement("button");btn.className="btn btn-outline";btn.textContent="Revoir";btn.addEventListener("click",()=>{let cat=$("categoryFilter");cat.value="all";filtered=[...quizQuestions];state.current=filtered.findIndex(x=>x.id===q.id);showView("quiz")});div.append(left,btn);$("revisionList").appendChild(div)})}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2300)}
$("resetBtn").addEventListener("click",()=>{if(confirm("Réinitialiser tous tes résultats QCM et toutes tes réponses ouvertes ?")){localStorage.removeItem("stcTrainerState");state.answers={};state.oral={};state.current=0;filtered=[...quizQuestions];$("categoryFilter").value="all";updateStats();renderQuiz();toast("Progression réinitialisée.")}});
updateStats();