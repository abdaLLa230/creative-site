
        // Mind Map data
        const mindMaps = {
            chapters12: {
                title: "Chapters 1+2: Foundations of Creative Thinking",
                highlights: [
                    "Bloom's Taxonomy cognitive skills hierarchy",
                    "Four types of knowledge",
                    "Affective Domain for emotional learning",
                    "Critical thinking process",
                    "Problem-solving steps",
                    "Key elements of innovation"
                ],
                image: "images/chapter one + two.png"
            },
            chapters34: {
                title: "Chapters 3+4: Theories and Variables",
                highlights: [
                    "Definition and purpose of theory",
                    "Types of variables",
                    "Levels of theory",
                    "Theoretical framework development",
                    "Maslow's Hierarchy of Needs",
                    "Brainstorming techniques"
                ],
                image: "images/chapter Three + Four.png"
            },
            chapter5: {
                title: "Chapter 5: Design Thinking Process",
                highlights: [
                    "Empathize with users",
                    "Define the problem",
                    "Ideate solutions",
                    "Create prototypes",
                    "Test and iterate",
                    "Core values of design thinking"
                ],
                image: "images/chapter 5.png"
            }
        };

        // Chapter data
        const chapters = {
            chapter1: {
                title: "Chapter 1: Creativity, Intelligence & Thinking Models",
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Bloom's Taxonomy</h4>
                            <p> Bloom’s Taxonomy is a framework that organizes learning objectives by complexity, ranging from basic understanding to advanced critical thinking and creativity.</p>
                            <div class="grid md:grid-cols-2 gap-4 mt-3">
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">1. Knowledge</h5>
                                    <p class="text-sm text-gray-600">Recall facts and basic concepts</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">2. Comprehension</h5>
                                    <p class="text-sm text-gray-600">Understand and explain ideas</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">3. Application</h5>
                                    <p class="text-sm text-gray-600">Use knowledge in new situations</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">4. Analysis</h5>
                                    <p class="text-sm text-gray-600">Break information into parts and examine relationships</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">5. Synthesis</h5>
                                    <p class="text-sm text-gray-600">Combine elements to create something new</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">6. Evaluation</h5>
                                    <p class="text-sm text-gray-600">Judge and make decisions based on criteria</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Types of Knowledge</h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Factual</h5>
                                    <p class="text-sm text-gray-600">Basic elements like terminology and facts</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Conceptual</h5>
                                    <p class="text-sm text-gray-600">Theories, models, classifications, structures</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Procedural</h5>
                                    <p class="text-sm text-gray-600">Methods, techniques, and algorithms</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Metacognitive</h5>
                                    <p class="text-sm text-gray-600">Knowledge of one's own thinking</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Affective Domain (Emotional Learning - Krathwohl)</h4>
                            <div class="grid md:grid-cols-5 gap-2">
                                <div class="bg-green-50 p-2 rounded border border-green-100 text-center">
                                    <h5 class="font-medium text-green-700 text-sm">1. Receiving</h5>
                                    <p class="text-xs text-gray-600">Awareness and willingness to hear</p>
                                </div>
                                <div class="bg-green-50 p-2 rounded border border-green-100 text-center">
                                    <h5 class="font-medium text-green-700 text-sm">2. Responding</h5>
                                    <p class="text-xs text-gray-600">Participation in learning process</p>
                                </div>
                                <div class="bg-green-50 p-2 rounded border border-green-100 text-center">
                                    <h5 class="font-medium text-green-700 text-sm">3. Valuing</h5>
                                    <p class="text-xs text-gray-600">Assigning worth to behavior, object, or idea</p>
                                </div>
                                <div class="bg-green-50 p-2 rounded border border-green-100 text-center">
                                    <h5 class="font-medium text-green-700 text-sm">4. Organizing</h5>
                                    <p class="text-xs text-gray-600">Integrating values and resolving conflicts</p>
                                </div>
                                <div class="bg-green-50 p-2 rounded border border-green-100 text-center">
                                    <h5 class="font-medium text-green-700 text-sm">5. Characterizing</h5>
                                    <p class="text-xs text-gray-600">Acting consistently with internalized values</p>
                                </div>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <h2 class="text-2xl font-bold text-blue-800 mb-6">Intelligence</h2>
                            <div><p class="text-xs text-gray-600"></p></div>
                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p class="text-gray-700 mb-4 italic">
                        "The ability to learn, understand, and think about things."
                    </p>
                    <p class="text-blue-700">Longman Dictionary </p>
                </div>
                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p class="text-gray-700 mb-4 italic">
                        "The ability to acquire and apply knowledge and skills."
                    </p>
                    <p class="text-blue-700">Compact Oxford English Dictionary, 2006</p>
                </div>
                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p class="text-gray-700 mb-4 italic">
                        "The ability to learn facts and skills and apply them, especially when this ability is highly
 developed"
                    </p>
                    
                </div>
                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p class="text-gray-700 mb-4 italic">
                        "The ability to comprehend; to understand and profit from experience."
                    </p>
                </div>
                    </div>
                `
            },
            chapter2: {
                title: "Chapter 2: Critical Thinking, Problem Solving & Innovation",
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Critical Thinking</h4>
                            <p class="mb-1">A mental process involving analysis, evaluation, and reasoning. Relies on clarity, precision, evidence, and fairness.</p>
                            <p>The information can be gathered fromobservation, experience, reasoning, or communication</p>
                            <div class="grid md:grid-cols-2 gap-4 mt-3">
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">Key Traits</h5>
                                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                        <li>Ask questions</li>
                                        <li>Use evidence</li>
                                        <li>Are intellectually independent</li>
                                        <li>Open to new ideas</li>
                                        <li>Make logical connections</li>
                                    </ul>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <h5 class="font-medium text-blue-700 mb-1">Critical Thinking Process</h5>
                                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                        <li>Clarify purpose and context</li>
                                        <li>Question information sources</li>
                                        <li>Identify arguments</li>
                                        <li>Analyze sources and reasoning</li>
                                        <li>Evaluate arguments</li>
                                        <li>Create and synthesize own arguments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Steps in Problem Solving</h4>
                            <div class="grid md:grid-cols-4 gap-2">
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">1</div>
                                    <p class="text-xs font-medium">Identify the problem</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">2</div>
                                    <p class="text-xs font-medium">Explore solutions</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">3</div>
                                    <p class="text-xs font-medium">Brainstorm</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">4</div>
                                    <p class="text-xs font-medium">List pros/cons</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">5</div>
                                    <p class="text-xs font-medium">Identify factors</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">6</div>
                                    <p class="text-xs font-medium">Choose solution</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">7</div>
                                    <p class="text-xs font-medium">Recognize limits</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">8</div>
                                    <p class="text-xs font-medium">Plan implementation</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Key Elements of Innovation</h4>
                            <div class="grid md:grid-cols-3 gap-3">
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Creativity</h5>
                                    <p class="text-sm text-gray-600">Generates original ideas and challenges assumptions</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Innovation Culture</h5>
                                    <p class="text-sm text-gray-600">Encourages risk-taking, experimentation, and curiosity</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Resources</h5>
                                    <p class="text-sm text-gray-600">Financial support, technology, skilled people, data access</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Leadership</h5>
                                    <p class="text-sm text-gray-600">Provides direction, purpose, and inspiration</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Feedback</h5>
                                    <p class="text-sm text-gray-600">Uses feedback loops to refine and improve</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Risk Management</h5>
                                    <p class="text-sm text-gray-600">Evaluates feasibility and potential impact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            chapter3: {
                title: "Chapter 3: Theory & Variables",
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">What is a Theory?</h4>
                            <p>A model or framework for observation and understanding phenomena that:</p>
                            <div class="grid md:grid-cols-2 gap-4 mt-3">
                                <p class="text-md text-blue-600">Generalized statements about relationships</p>
                                <p class="text-md text-blue-600">Explains and predicts the relationship between variables</p>
                                <p class="text-md text-blue-600">Allows the researcher to make links between</p>
                                <div class=" p-3 ">
                                    <p class="text-md text-gray-600"></p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <p class="text-md text-gray-600">Abstract and concrete concepts</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                    <p class="text-md text-gray-600">Theoretical and empirical knowledge</p>
                                </div>
                                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100"> 
                                    <p class="text-md text-gray-600">Thought and observational statements</p>
                                </div> 

                            </div>
                        </div>
                         
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Characteristics of theory</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-3">
                            
                                <div class="bg-green-50 p-3 rounded-lg border border-blue-100">
                                    <p class="text-md text-gray-600">Theory guides research and organizes its ideas.</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-blue-100">
                                    <p class="text-md text-gray-600">Empirically relevant.</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p class="text-md text-gray-600">Always tentative, never proven.</p>
                                </div> 
                                <div class="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p class="text-md text-gray-600">Becomes stronger as more supporting evidence is gathered</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-blue-100"> 
                                    <p class="text-md text-gray-600">Has the capacity to generate new research.</p>
                                </div>
                                
                            </div>
                        </div>
                        <h4 class="text-lg font-medium text-blue-600 ">What is a Variable?</h4>
                            <p>• A variable , as opposed to a constant, is simply anything.<br>
• any construct that can take on different values.</p>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Types of Variables</h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Independent Variable</h5>
                                    <p class="text-sm text-gray-600">Influences the dependent variable</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Dependent Variable</h5>
                                    <p class="text-sm text-gray-600">Outcome affected by the independent variable</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Moderating Variable</h5>
                                    <p class="text-sm text-gray-600">Affects the strength of the relationship</p>
                                </div>
                                <div class="bg-purple-50 p-3 rounded-lg border border-purple-100">
                                    <h5 class="font-medium text-purple-700 mb-1">Mediating Variable</h5>
                                    <p class="text-sm text-gray-600">Explains the relationship between two variables</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Levels of Theory</h4>
                            <div class="grid md:grid-cols-3 gap-3">
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Micro-Level</h5>
                                    <p class="text-sm text-gray-600">Explains individual behavior (e.g., Maslow's Motivation Theory)</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Meso-Level</h5>
                                    <p class="text-sm text-gray-600">Explains group interactions (e.g., Organizational Communication)</p>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-1">Macro-Level</h5>
                                    <p class="text-sm text-gray-600">Explains large-scale behaviors (e.g., National Cultures like Hofstede)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            chapter4: {
                title: "Chapter 4: Theoretical Framework & Brainstorming",
                content: `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Theoretical Framework</h4>
                            <p>A structure that supports and organizes your study. Describes concepts and how they relate to each other.</p>
                            <h5 class="text-md font-medium text-blue-500 mt-3 mb-2">Steps to Develop:</h5>
                            <div class="grid md:grid-cols-5 gap-2">
                                <div class="bg-blue-50 p-2 rounded border border-blue-100 text-center">
                                    <div class="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">1</div>
                                    <p class="text-xs font-medium">Identify concepts</p>
                                </div>
                                <div class="bg-blue-50 p-2 rounded border border-blue-100 text-center">
                                    <div class="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">2</div>
                                    <p class="text-xs font-medium">Define concepts</p>
                                </div>
                                <div class="bg-blue-50 p-2 rounded border border-blue-100 text-center">
                                    <div class="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">3</div>
                                    <p class="text-xs font-medium">Operationalize the concepts</p>
                                </div>
                                <div class="bg-blue-50 p-2 rounded border border-blue-100 text-center">
                                    <div class="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">4</div>
                                    <p class="text-xs font-medium">Identify moderating or intervening variables</p>
                                </div>
                                <div class="bg-blue-50 p-2 rounded border border-blue-100 text-center">
                                    <div class="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">5</div>
                                    <p class="text-xs font-medium">Define relationships between variable</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium text-blue-600 mb-2">Maslow's Hierarchy of Needs</h3>
                            <p class="text-md text-gray-600 mb-2">Maslow stated that people are motivated to achieve certain needs and that some needs take precedence over others.</p>
                            <div class="grid md:grid-cols-5 gap-2">
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">1</div>
                                    <h5 class="font-medium text-purple-700 text-sm">Physiological needs</h5>
                                    <p class="text-xs text-gray-600">food, water, reproduction, air, sleep, shelter, </p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">2</div>
                                    <h5 class="font-medium text-purple-700 text-sm">Safety needs</h5>
                                    <p class="text-xs text-gray-600">personal security, employment, resources , health , property </p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">3</div>
                                    <h5 class="font-medium text-purple-700 text-sm">Love and Belonging</h5>
                                    <p class="text-xs text-gray-600">friendships, intimacy, family</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">4</div>
                                    <h5 class="font-medium text-purple-700 text-sm">Esteem</h5>
                                    <p class="text-xs text-gray-600">respect, self-esteem, freedom, status, recognition</p>
                                </div>
                                <div class="bg-purple-50 p-2 rounded border border-purple-100 text-center">
                                    <div class="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">5</div>
                                    <h5 class="font-medium text-purple-700 text-sm">Self-actualization</h5>
                                    <p class="text-xs text-gray-600">desire to become the most that one can be</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-blue-600 mb-2">Brainstorming</h4>
                            <p class="text-md text-gray-600 mb-2">Brainstorming is a group problem-solving method that involves the spontaneous contribution of creative
ideas and solutions. </p>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-2">Team Roles</h5>
                                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                        <li><span class="font-medium">Leader:</span> defines the problem clearly</li>
                                        <li><span class="font-medium">Scribe:</span> writes every idea visibly for the team</li>
                                        <li><span class="font-medium">Team Members:</span> contribute freely</li>
                                    </ul>
                                </div>
                                <div class="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <h5 class="font-medium text-green-700 mb-2">Key Rules</h5>
                                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                        <li>No criticism or evaluation during idea generation</li>
                                        <li>Focus on quantity over quality</li>
                                        <li>Be open to original and risky ideas</li>
                                        <li>Ideas belong to the group, not individuals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            chapter5: {
                title: "Chapter 5: Design Thinking Process",
                content: `
                    <div class="space-y-6">
                        
    <div class="max-w-4xl w-full justify-center">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">5 Stages of Design Thinking</h1>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <!-- Empathize -->
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">👂</div>
                <h2 class="text-xl font-semibold text-blue-600">Empathize</h2>
                <p class="text-gray-600 mt-2">Understand user needs</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <!-- Define -->
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">✍️</div>
                <h2 class="text-xl font-semibold text-blue-600">Define</h2>
                <p class="text-gray-600 mt-2">Frame the problem</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <!-- Ideate -->
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">💡</div>
                <h2 class="text-xl font-semibold text-blue-600">Ideate</h2>
                <p class="text-gray-600 mt-2">Generate ideas</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <!-- Prototype -->
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">🛠️</div>
                <h2 class="text-xl font-semibold text-blue-600">Prototype</h2>
                <p class="text-gray-600 mt-2">Create solutions</p>
            </div>
            
            <div class="arrow hidden md:block">→</div>
            
            <!-- Test -->
            <div class="stage-card bg-white p-6 rounded-lg text-center w-full md:w-48">
                <div class="text-4xl mb-3">🧪</div>
                <h2 class="text-xl font-semibold text-blue-600">Test</h2>
                <p class="text-gray-600 mt-2">Evaluate solutions</p>
            </div>
        </div>
        
        <div class="flex md:hidden justify-center mt-4 space-x-2">
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
            <div class="arrow">↓</div>
        </div>
    </div>
                        <div>
                            <p>Design Thinking is a human-centered, creative problem-solving approach that involves understanding users, redefining problems, and creating innovative solutions.</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead class="bg-blue-50">
                                    <tr>
                                        <th class="py-2 px-4 border-b text-left">Stage</th>
                                        <th class="py-2 px-4 border-b text-left">Goal</th>
                                        <th class="py-2 px-4 border-b text-left">Tools/Methods</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Empathize</td>
                                        <td class="py-2 px-4 border-b">Understand users’ real needs, feelings, and challenges without assumptions</td>
                                        <td class="py-2 px-4 border-b">Observation, user interviews, immersing in users' environment</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2 px-4 border-b font-medium">Define</td>
                                        <td class="py-2 px-4 border-b">Clearly state the core problem based on user insights</td>
                                        <td class="py-2 px-4 border-b">Data synthesis, creating human-centered problem statements</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Ideate</td>
                                        <td class="py-2 px-4 border-b">Explore a wide variety of creative solutions and push beyond obvious ideas.</td>
                                        <td class="py-2 px-4 border-b"> Brainstorming, mind mapping, SCAMPER, group discussions</td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2 px-4 border-b font-medium">Prototype</td>
                                        <td class="py-2 px-4 border-b">Build quick, low-fidelity models to test assumptions and visualize solutions.</td>
                                        <td class="py-2 px-4 border-b">Sketching, paper models, mock-ups, digital demos</td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 px-4 border-b font-medium">Test</td>
                                        <td class="py-2 px-4 border-b">Get user feedback on prototypes to refine solutions and uncover hidden problems.</td>
                                        <td class="py-2 px-4 border-b">User testing, feedback collection, usability observation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2 class="text-lg font-medium text-blue-600 mb-2">Design Thinking</h2>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"> EMPATHISE </span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"> IMPLEMENT</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PROTOTYPE</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TEST</span>
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">IDEATE</span>
                                 <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">DEFINE</span>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        // Creative Thinking Steps
        const steps = [
            {
                title: "Challenge Assumptions",
                description: "Question the status quo and conventional wisdom. Don't take things at face value."
            },
            {
                title: "Embrace Curiosity",
                description: "Cultivate a habit of asking 'what if' and 'why not'. Explore new subjects and ideas."
            },
            {
                title: "Develop Observation Skills",
                description: "Notice details others might overlook. Practice active listening and keen observation."
            },
            {
                title: "Make Connections",
                description: "Combine ideas from different fields or disciplines. Look for patterns and relationships."
            },
            {
                title: "Practice Divergent Thinking",
                description: "Generate multiple solutions to problems. Quantity leads to quality in creative thinking."
            },
            {
                title: "Embrace Failure",
                description: "View mistakes as learning opportunities. Failure is often a step toward innovation."
            },
            {
                title: "Create Idea Banks",
                description: "Keep records of thoughts and inspirations. Maintain journals or digital notes."
            },
            {
                title: "Engage in Play",
                description: "Allow time for unstructured creative activities. Play stimulates imagination."
            }
        ];

        // Creative Thinking Quotes
        const quotes = [
            "Creativity is just connecting things. - Steve Jobs",
            "The creative adult is the child who survived. - Ursula K. Le Guin",
            "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
            "Creativity involves breaking out of established patterns to look at things differently. - Edward de Bono",
            "Creativity is intelligence having fun. - Albert Einstein",
            "The worst enemy to creativity is self-doubt. - Sylvia Plath",
            "Creativity takes courage. - Henri Matisse",
            "To be creative means to be in love with life. - Osho",
            "Curiosity about life is the secret of great creative people. - Leo Burnett",
            "The chief enemy of creativity is 'good' sense. - Pablo Picasso"
        ];

        // Show section function
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.remove('hidden');
            
            // Close mobile menu if open
            document.getElementById('mobileMenu').classList.add('hidden');
            
            // If showing mindmap or chapters, load the first tab
            if (sectionId === 'mindmap') {
                showMindMap('chapters12');
            } else if (sectionId === 'chapters') {
                showChapter('chapter1');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Show mind map content
        function showMindMap(mindmapId) {
            const mindmap = mindMaps[mindmapId];
            const mindmapContent = document.getElementById('mindmapContent');
            
            // Update active tab
            document.querySelectorAll('.mindmap-tab').forEach(tab => {
                tab.classList.remove('active', 'bg-blue-600', 'text-white');
                tab.classList.add('bg-gray-200', 'hover:bg-gray-300');
            });
            document.querySelector(`.mindmap-tab:nth-child(${Object.keys(mindMaps).indexOf(mindmapId) + 1})`).classList.add('active', 'bg-blue-600', 'text-white');
            document.querySelector(`.mindmap-tab:nth-child(${Object.keys(mindMaps).indexOf(mindmapId) + 1})`).classList.remove('bg-gray-200', 'hover:bg-gray-300');
            
            // Generate mindmap content
            let content = `
                <div>
                    <h3 class="text-xl font-semibold text-blue-700  mb-4">${mindmap.title}</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <ul class="list-disc pl-5 pt-6 space-y-2 text-gray-700 h-center">
                                ${mindmap.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
                            <img src="${mindmap.image}" alt="${mindmap.title}" class="rounded   w-auto h-[550px] object-contain">
                        </div>
                    </div>
                </div>
            `;
            
            mindmapContent.innerHTML = content;
        }

        // Show chapter content
        function showChapter(chapterId) {
            const chapter = chapters[chapterId];
            const chapterContent = document.getElementById('chapterContent');
            
            // Update active tab
            document.querySelectorAll('.chapter-tab').forEach(tab => {
                tab.classList.remove('active', 'bg-blue-600', 'text-white');
                tab.classList.add('bg-gray-200', 'hover:bg-gray-300');
            });
            document.querySelector(`.chapter-tab:nth-child(${Object.keys(chapters).indexOf(chapterId) + 1})`).classList.add('active', 'bg-blue-600', 'text-white');
            document.querySelector(`.chapter-tab:nth-child(${Object.keys(chapters).indexOf(chapterId) + 1})`).classList.remove('bg-gray-200', 'hover:bg-gray-300');
            
            // Generate chapter content
            let content = `
                <div>
                    <h3 class="text-xl font-semibold text-blue-700 mb-6">${chapter.title}</h3>
                    ${chapter.content}
                </div>
            `;
            
            chapterContent.innerHTML = content;
        }

        // Display steps with animation
        function displaySteps() {
            const container = document.getElementById('steps-container');
            container.innerHTML = '';
            
            steps.forEach((step, index) => {
                setTimeout(() => {
                    const stepElement = document.createElement('div');
                    stepElement.className = 'fade-in bg-blue-50 p-4 rounded-lg border border-blue-200';
                    stepElement.innerHTML = `
                        <h4 class="text-lg font-medium text-blue-700">${step.title}</h4>
                        <p class="text-gray-700 mt-2">${step.description}</p>
                    `;
                    container.appendChild(stepElement);
                }, index * 200);
            });
        }

        // Display random quotes
        function showNewQuotes() {
            const container = document.getElementById('quotes-container');
            container.innerHTML = '';
            
            // Shuffle quotes and pick 3
            const shuffled = [...quotes].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            
            selected.forEach(quote => {
                const quoteElement = document.createElement('div');
                quoteElement.className = 'fade-in bg-white p-4 rounded-lg shadow-sm';
                quoteElement.innerHTML = `
                    <p class="text-gray-700 italic">"${quote}"</p>
                `;
                container.appendChild(quoteElement);
            });
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Show home section by default
            document.getElementById('home').classList.remove('hidden');
            
            // Initialize creative thinking section
            displaySteps();
            showNewQuotes();
        });
    