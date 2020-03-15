// https://docs.microsoft.com/en-us/powerquery-m/power-query-m-language-specification

Prism.languages.powerquery = {
    'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/).*)/,
        lookbehind: true
    },
    'quoted-identifier': {
        pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true,
        alias: 'constant'
    },
    'string': {
        pattern: /"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true
    },
    'constant': [
        /\bDay\.(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/,
        /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
        /\bOccurrence\.(?:First|Last|All)\b/,
        /\bOrder\.(?:Ascending|Descending)\b/,
        /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
        /\bMissingField\.(?:Error|Ignore|UseNull)\b/,
        /\bQuoteStyle\.(?:Csv|None)\b/,
        /\bJoinKind\.(?:Inner|LeftOuter|RightOuter|FullOuter|LeftAnti|RightAnti)\b/,
        /\bGroupKind\.(?:Global|Local)\b/,
        /\bExtraValues\.(?:List|Ignore|Error)\b/,
        /\bJoinAlgorithm\.(?:Dynamic|PairwiseHash|SortMerge|LeftHash|RightHash|LeftIndex|RightIndex)\b/,
        /\bJoinSide\.(?:Left|Right)\b/,
        /\bPrecision\.(?:Double|Decimal)\b/,
        /\bRelativePosition\.From(?:End|Start)\b/,
        /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf8|Utf16|Windows)\b/,
        /\bValue\.(?:As|Is|ReplaceType)\b/,
        /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Int8|Int16|Int32|Int64|Function|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
        /\bnull\b/
    ],
    'boolean': /\b(?:true|false)\b/,
    'keyword': /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
    'function': [
        /\bBinary\.(?:Buffer|Combine|Compress|Decompress|From(?:List|Text)?|InferContentType|Length|To(?:List|Text))\b/,
        /\bBinaryEncoding\.(?:Base64|Hex)\b/,
        /\bBinaryFormat\.(?:7BitEncoded(?:SignedInteger|UnsignedInteger)|Binary|Byte(?:Order)?|Choice|Decimal|Double|Group|Length|List|Null|Record|SignedInteger(?:16|32|64)|Single|Text|Transform|UnsignedInteger(?:16|32|64))\b/,
        /\bBinaryOccurrence\.(?:Optional|Repeating|Required)\b/,
        /\bByteOrder\.(?:(?:Big|Little)Endian)\b/,
        /\bCharacter\.(?:From|To)Number\b/,
        /\bCompression\.(?:Deflate|GZip)\b/,
        /\bOccurrence\.(?:Optional|Repeating|Required)\b/,
        /\bCombiner\.(?:CombineTextBy(?:Delimiter|EachDelimiter|Lengths|Positions|Ranges))\b/,
        /\bComparer\.(?:Equals|FromCulture|Ordinal(?:IgnoreCase)?)\b/,
        /\bCulture\.Current\b/,
        /\bDate\.(?:Add(?:Days|Months|Quarters|Weeks|Years)|Day(?:OfWeek|OfWeekName|OfYear)?|DaysInMonth|EndOf(?:Day|Month|Quarter|Week|Year)|From(?:Text)?|IsInCurrent(?:Day|Month|Quarter|Week|Year)|IsInNext(?:Day|Month|NDays|NMonths|NQuarters|NWeeks|NYears|Quarter|Week|Year)|IsInPrevious(?:Day|Month|NDays|NMonths|NQuarters|NWeeks|NYears|Quarter|Week|Year)|IsInYearToDate|IsLeapYear|Month(?:Name)?|QuarterOfYear|StartOf(?:Day|Month|Quarter|Week|Year)|To(?:Record|Text)|WeekOf(?:Month|Year)|Year)\b/,
        /\bDateTime\.(?:AddZone|Date|FixedLocalNow|From|From(?:FileTime|Text)|IsInCurrent(?:Hour|Minute|Second)|IsInNext(?:Hour|Minute|NHours|NMinutes|NSeconds|Second)|IsInPrevious(?:Hour|Minute|NHours|NMinutes|NSeconds|Second)|LocalNow|Time|To(?:Record|Text))\b/,
        /\bDateTimeZone\.(?:Fixed(?:Local|Utc)Now|From(?:FileTime|Text)?|LocalNow|(?:Remove|Switch)Zone|To(?:Local|Record|Text|Utc)|UtcNow|Zone(?:Hours|Minutes))\b/,
        /\bDuration\.(?:Days|From(?:Text)?|Hours|Minutes|Seconds|To(?:Record|Text)|Total(?:Days|Hours|Minutes|Seconds))\b/,
        /\bDiagnostics\.(?:ActivityId|Trace)\b/,
        /\bError\.Record\b/,
        /\bExpression\.(?:Constant|Evaluate|Identifier)\b/,
        /\bFunction\.(?:From|Invoke(?:After)?|IsDataSource|ScalarVector)\b/,
        /\bItemExpression\.(?:From|Item)\b/,
        /\bLines\.(?:From(?:Binary|Text)|To(?:Binary|Text))\b/,
        /\bList\.(?:(?:NonNull)?Count|IsEmpty|Alternate|Buffer|Distinct|FindText|First(?:N)?|InsertRange|IsDistinct|Last(?:N)?|Matches(?:All|Any)|Positions|Range|Select|Single(?:OrDefault)?|Skip|Accumulate|Combine|Remove(?:Range|FirstN|Items|LastN|Nulls|MatchingItems)|Repeat|Replace(?:Range|MatchingItems|Value)|Reverse|Split|Transform|TransformMany|AllTrue|AnyTrue|Contains(?:All|Any)?|PositionOf(?:Any)?|Difference|Intersect|Union|Zip|Max|MaxN|Median|Min|MinN|Sort|Average|Mode|Modes|StandardDeviation|Sum|Covariance|Product|Date(?:s|Times|TimeZones)|Durations|Generate|Numbers|Random|Times)\b/,
        /\bLogical\.(?:From(?:Text)?|ToText)\b/,
        /\bNumber\.(?:E|Epsilon|NaN|(?:Negative|Positive)Infinity|PI|Is(?:Even|NaN|Odd)|From(?:Text)?|ToText|Round(?:AwayFromZero|Down|TowardZero|Up)?|Abs|Combinations|Exp|Factorial|IntegerDivide|Ln|Log|Log10|Mod|Permutations|Power|Sign|Sqrt|Random(?:Between)?|Acos|Asin|Atan|Atan2|Cos|Cosh|Sin|Sinh|Tan|Tanh|Bitwise(?:And|Not|Or|Shift(?:Left|Right)|Xor))\b/,
        /\bRecord\.(?:Combine|AddField|(?:Has|Remove|Rename|Reorder|Transform|Select)Fields|Field(?:Count|Names|OrDefault|Values)?|From(?:List|Table)|To(?:List|Table))\b/,
        /\bReplacer\.(?:Replace(?:Text|Value))\b/,
        /\bRowExpression\.(?:Column|From|Row)\b/,
        /\bSplitter\.Split(?:ByNothing|TextBy(?:CharacterTransition|(?:Any|Each)?Delimiter|Lengths|Positions|Ranges|RepeatedLengths|Whitespace))\b/,
        /\bTable\.(?:Add(?:(?:Index|Join)?Column|Key)|AggregateTableColumn|DuplicateColumn|AlternateRows|Buffer|Column(?:Count|Names|sOfType)?|Combine(?:Columns)?|Contains(?:All|Any)?|DemoteHeaders|Distinct|Expand(?:ListColumn|RecordColumn|TableColumn)|Fill(?:Down|Up)|FilterWithDataTable|FindText|First(?:N|Value)?|From(?:Columns|List|Partitions|Records|Rows|Value)|Fuzzy(?:Join|NestedJoin)|Group|HasColumns|InsertRows|IsDistinct|IsEmpty|Join|Keys|Last(?:N)?|Matches(?:AllRows|AnyRows)|Max|MaxN|Min|MinN|NestedJoin|Partition|Pivot|PositionOf(?:Any)?|PrefixColumns|Profile|PromoteHeaders|Range|Remove(?:Columns|FirstN|LastN|MatchingRows|Rows|RowsWithErrors)|RenameColumns|ReorderColumns|Repeat|Replace(?:ErrorValues|Keys|MatchingRows|RelationshipIdentity|Rows|Value)|ReverseRows|RowCount|Schema|Select(?:Columns|Rows|RowsWithErrors)|SingleRow|Skip|Sort|Split(?:Column)?|ToColumns|To(?:List|Records|Rows)|Transform(?:ColumnNames|Columns|ColumnTypes|Rows)|Transpose|Unpivot(?:OtherColumns)?|View(?:Function)?)\b/,
        /\bTables\.GetRelationships\b/,
        /\bText\.(?:At|(?:After|Before)Delimiter|BetweenDelimiters|Clean|Combine|Contains|End(?:sWith)?|From(?:Binary)?|InferNumberType|Insert|Length|Lower|Middle|NewGuid|Pad(?:End|Start)|PositionOf(?:Any)?|Proper|Range|Remove(?:Range)?|Repeat|Replace(?:Range)?|Reverse|Select|Split(?:Any)?|Start(?:sWith)?|To(?:Binary|List)|Trim(?:End|Start)?|Upper)\b/,
        /\bTime\.(?:EndOfHour|From(?:Text)?|Hour|Minute|Second|StartOfHour|To(?:Record|Text))\b/,
        /\bType\.(?:AddTableKey|ClosedRecord|Facets|For(?:Function|Record)|Function(?:Parameters|RequiredParameters|Return)|Is(?:Nullable|OpenRecord)?|ListItem|NonNullable|OpenRecord|RecordFields|Replace(?:Facets|TableKeys)|Table(?:Column|Keys|Row|Schema)|Union)\b/,
        /\bUri\.(?:BuildQueryString|Combine|EscapeDataString|Parts)\b/,
        /\bValue\.(?:Add|Compare|Divide|Equals|Metadata|Multiply|NativeQuery|NullableEquals|RemoveMetadata|ReplaceMetadata|Subtract|Type)\b/,
        /\b(?:Byte|Currency|Decimal|Double|Guid|Int8|Int16|Int32|Int64|Percentage|Single)\.From\b/,
        /\bJson.FromValue\b/
    ],
    'data-type':
    {
        pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time|type)\b/,
        alias: 'variable'
    },
    'number': /\b0x[\da-f]+\b|[+-]?\b\d+\.?\d*e?\d*|\B\.\d+\b/i,
    'operator': /[-+*\/&?@^]|<(?:=>?|>)?|>(?:=?)|=(?:>?)/,
    'punctuation': /[,;\[\](){}]/
};

Prism.languages.pq = Prism.languages['powerquery'];
Prism.languages.mscript = Prism.languages['powerquery']